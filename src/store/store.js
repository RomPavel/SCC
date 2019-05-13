import Vue from 'vue'
import Vuex from 'vuex'
import { getAllProjects } from "../services/software.service";
import { getConfigSettings } from "../services/config.settings.service";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //isAuthorized: true, // Boolean(cookie.get('Authorization'))
    projects: [],
    configSettings: [],
  },
  getters: {
    projects(state) {
      return state.projects
    },
    configSettings(state) {
      return state.configSettings.map((el) => {
        el.value = el.value.map(option => {
          return {
            ...option,
            group: el.group
          }
        });
        return el;
      });
    }
  },
  mutations: {
    updateProjects(state, props) {
      state.projects = props;
    },
    updateConfigSettings(state, props) {
      state.configSettings = props;
    }
  },
  actions: {
    async loadUserProjects({ commit }) {
      const projects = await getAllProjects();
      commit('updateProjects', projects);
    },
    async loadConfigurationSettings({ commit }) {
      const configSettings = await getConfigSettings();
      commit('updateConfigSettings', configSettings);
    },
    // login({ commit }, props) {
    //   const token = props.token

    //   const prevPage = router.currentRoute.meta.previousPage
    //   cookie.set('Authorization', token, { expires: 2147483647 })
    //   HTTP_2.defaults.headers['Authorization'] = `Bearer ${token}`
    //   commit('updateAuth', true)
    //   router.push(prevPage)
    // },
  }
})
