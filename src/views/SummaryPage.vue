<template>
  <div class="page_not_found">
    <md-card class="special_card summary">
      <div>
        <md-card-header>
          <div class="md-title">Summary for {{name}}</div>
        </md-card-header>

        <md-content class="md-scrollbar config_list">
          <div v-for="({value, group}, index) in config" :key="index">
            <p>{{group}}</p>
            <div v-for="({label}, index) in value" :key="index">
              <span>- {{label}}</span>
            </div>
          </div>
        </md-content>
      </div>

      <div>
        <md-card-header>
          <div class="md-title">Laboriousness</div>
        </md-card-header>
        <div class="cost">{{laboriousness}}</div>
      </div>
      <div>
        <md-card-header>
          <div class="md-title">Enter employee salary</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Salary</label>
            <md-input type="number" :value="employeeSalary()" @input="updateEmployeeSalary"></md-input>
            <span class="md-prefix">$</span>
          </md-field>
        </md-card-content>
      </div>
      <div>
        <md-card-header>
          <div class="md-title">Cost of {{name}}</div>
        </md-card-header>
        <div class="cost">{{cost}}</div>
      </div>
    </md-card>
  </div>
</template>

<script>
import {
  findProjectById,
  updateEmployeeSalary
} from "../services/software.service";
import { formatCost } from "../utils/cost.util";
export default {
  name: "SummaryPage",
  props: ["id"],
  methods: {
    async updateEmployeeSalary(employeeSalary) {
      await updateEmployeeSalary({
        employeeSalary,
        _id: this.id,
        currency: "$"
      });
    },
    employeeSalary() {
      return this.project.employeeSalary || "";
    }
  },
  computed: {
    cost() {
      const { cost, currency } = this.project;
      const costString = formatCost({ cost, currency }) || "Enter salary first";
      return costString;
    },
    laboriousness() {
      return this.project.laboriousness || "";
    },
    config() {
      return this.project.config || {};
    },
    name() {
      return this.project.name || "";
    },
    project() {
      return findProjectById(this.projects, this.id) || {};
    },
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<style>
.page_not_found {
  padding-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.summary {
  width: 50%;
  margin-bottom: 100px;
  padding-bottom: 40px;
}
.summary > div {
  margin: 30px 0 30px 0;
}
.config_list {
  max-height: 400px;
  overflow: auto;
}
.config_list,
.cost {
  padding: 0 40px 0 40px;
}
.cost {
  font-size: 20px;
  font-weight: 600;
  color: #448aff;
}
.config_list p {
  font-size: 20px;
  font-weight: 400;
}
.config_list span {
  font-size: 18px;
  font-weight: 100;
}
</style>

