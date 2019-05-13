<template>
  <md-steppers :md-active-step.sync="selectedGroupInd" md-linear>
    <md-step
      v-for="({label, value, description, required}, index) in configSettings"
      :key="index"
      :id="''+index"
      :md-description="label"
      :md-error="errorMessages[index]"
      :md-done.sync="finishedGroup[index]"
    >
      <h1 class="special_title">{{description + isReqiured(required)}}</h1>
      <div>
        <md-checkbox
          v-for="(item, ind) in value"
          :key="ind"
          :value="item"
          @change="updateSelected(item)"
          v-model="fakeSelectedConfig"
        >{{item.label}}</md-checkbox>
      </div>
      <md-button
        v-if="islastGroup(configSettings.length, index)"
        class="md-raised md-primary"
        @click="goToNextStep(index)"
      >Continue</md-button>
      <md-button class="md-raised md-primary" @click="finishConfiguration" v-else>Done</md-button>
    </md-step>
  </md-steppers>
</template>

<script>
import { findProjectById, updateConfig } from "../services/software.service";
export default {
  name: "ProjectPage",
  props: ["id"],
  data() {
    return {
      selectedGroupInd: "0",
      finishedGroup: {},
      selectedConfig: [],
      fakeSelectedConfig: [],
      errorMessages: {}
    };
  },
  methods: {
    goToNextStep(id) {
      this.finishedGroup[id] = true;
      this.selectedGroupInd = `${id + 1}`;
    },
    isGroupSelected(index) {
      return +index == +this.selectedGroupInd;
    },
    isReqiured(required) {
      if (!required) return "";
      return "* (Required)";
    },
    islastGroup(length, ind) {
      return +ind < +length - 1;
    },
    updateSelected(value) {
      const groupInd = +this.selectedGroupInd;
      this.selectedConfig[groupInd] = this.selectedConfig[groupInd] || {
        value: [],
        label: this.getCurrentConfigGroupLabel()
      };
      const optionInd = this.selectedConfig[groupInd].value.findIndex(
        el => el.label === value.label
      );
      if (optionInd !== -1) {
        this.selectedConfig[groupInd].value.splice(optionInd, 1);
      } else if (this.configSettings[groupInd].multi) {
        this.selectedConfig[groupInd].value.push(value);
      } else {
        const ind = this.fakeSelectedConfig.findIndex(
          el => el.group === value.group
        );
        if (ind !== -1 && this.selectedConfig[groupInd].value.length > 0) {
          this.fakeSelectedConfig.splice(ind, 1);
        }
        this.selectedConfig[groupInd].value.length = 1;
        this.selectedConfig[groupInd].value[0] = value;
      }
    },

    finishConfiguration() {
      const missed = 0;
      this.configSettings.forEach((el, ind) => {
        if (!el.required) {
          this.errorMessages[ind] = "";
        } else if (!this.selectedConfig[ind]) {
          this.errorMessages[ind] = "Required";
          missed++;
        } else if (this.selectedConfig[ind].value.length === 0) {
          this.errorMessages[ind] = "Required";
          missed++;
        } else {
          this.errorMessages[ind] = "";
        }
      });
      if (!missed) {
        updateConfig({ config: this.selectedConfig, _id: this.id });
      }
      this.$forceUpdate();
    },
    getCurrentConfigGroupLabel() {
      return this.configSettings[this.selectedGroupInd].label;
    }
  },
  computed: {
    configSettings() {
      const { configSettings } = this.$store.getters;
      return configSettings;
    }
  }
};
</script>

<style>
.md-checkbox {
  display: flex;
}
</style>

