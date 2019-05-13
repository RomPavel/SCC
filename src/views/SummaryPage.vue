<template>
  <div class="wrapper">
    <div class="container">
      <div class="page_not_found">
        <p>{{project}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { findProjectById } from "../services/software.service";
export default {
  name: "SummaryPage",
  props: ["id"],
  computed: {
    project() {
      return findProjectById(this.projects, this.id);
    },
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<style>
.page_not_found {
  height: calc(100vh - 86px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.page_not_found p {
  font-size: 30px;
  font-weight: 500;
}
</style>

