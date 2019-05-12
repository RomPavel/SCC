<template>
  <div class="margin">
    <md-table v-model="projects" md-card>
      <md-table-toolbar>
        <h1 class="md-title">My Software</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item._id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Cost">{{ getProjectPrice(item)}}</md-table-cell>
        <md-table-cell>
          <md-button @click="goToConfiguration(item)" class="md-primary">Go to Configuration</md-button>
        </md-table-cell>
        <md-table-cell>
          <template v-if="item.isConfigured">
            <md-button @click="goToSummary(item)" class="md-primary">Go to Summary</md-button>
          </template>
          <template v-else>Configure software first</template>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-table md-card class="special_table">
      <md-table-toolbar>
        <h1 class="md-title">New Software</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row">
        <md-field :class="messageClass">
          <label>Name</label>
          <md-input v-model="newName" required @input="isError=false"></md-input>
          <span class="md-error">field required</span>
        </md-field>
      </md-table-row>
      <md-table-row slot="md-table-row">
        <md-button
          class="md-primary md-raised special_button"
          @click="configNewProject"
        >configure new Software</md-button>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  name: "ProjectPage",
  data() {
    return {
      newName: undefined,
      isError: false
    };
  },
  methods: {
    getProjectPrice({ cost, currency = "" }) {
      if (cost) {
        return `${cost}${currency}`;
      }
      return "____";
    },
    goToSummary({ _id }) {
      this.$router.push(`/project/${_id}/summary`);
    },
    goToConfiguration({ _id }) {
      this.$router.push(`/project/${_id}`);
    },
    async configNewProject() {
      if (this.newName) {
        const newSoft = await this.$store.dispatch("createSoftware", {
          name: this.newName
        });
        this.$router.push(`/project/${newSoft._id}`);
      }
      this.isError = true;
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
    messageClass() {
      return {
        "md-invalid": this.isError,
        special_div: true
      };
    }
  }
};
</script>

<style>
.margin {
  margin: 30px 15%;
}
.special_table {
  margin-top: 30px;
  width: 30%;
  padding-bottom: 30px;
}
.special_div {
  width: 90%;
  margin: auto;
}
.special_button {
  margin-top: 30px;
  margin-left: 14px;
}
</style>

