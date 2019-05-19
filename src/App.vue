<template>
  <div id="app">
    <md-toolbar class="md-primary">
      <div class="page-container md-layout-column md-headline">Software Cost Calculator</div>
      <div class="page-container md-toolbar-section-end">
        <md-button @click="goToHomePage">На главную страницу</md-button>
      </div>
    </md-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  beforeMount() {
    this.$store.dispatch("loadUserProjects");
    this.$store.dispatch("loadConfigurationSettings");
  },
  methods:{
    goToHomePage(){
      this.$router.push('/');
    }
  }
};
</script>

<style src="./assets/css/main.css">
</style>
