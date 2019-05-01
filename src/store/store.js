import Vue from 'vue'
import Vuex from 'vuex'
import { getAllProjects } from "../utils/projects.utils";
import { getConfigSettings } from "../utils/config.settings.utils";

// import { HTTP_1, HTTP_2 } from '@/request/request'
// import cookie from 'vue-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthorized: true, // Boolean(cookie.get('Authorization'))
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
            group: el.label
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
    // updateAuth(state, props) {
    //   state.isAuthorized = props
    // },

  },
  actions: {
    loadUserProjects({ commit }) {
      const projects = getAllProjects();
      commit('updateProjects', projects);
    },
    loadConfigurationSettings({ commit }) {
      const configSettings = getConfigSettings();
      commit('updateConfigSettings', configSettings);
    }
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
