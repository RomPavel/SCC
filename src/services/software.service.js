import store from '../store/store'

import axios from 'axios'
const url = process.env.VUE_APP_API_URL || 'http://localhost:3333/api'
export async function getAllProjects() {
    const { data } = await axios.get(`${url}/software/all`);
    return data;
}
export async function createSoftware({ name }) {
    const { data } = await axios.post(`${url}/software/new`, { name })
    store.dispatch('loadUserProjects');
    return data;
}
export async function updateConfig({ config, _id }) {
    await axios.put(`${url}/software/update`, { config, _id  })
    store.dispatch('loadUserProjects');
}
export function findProjectById(projects, id) {
    return projects.find((el) => el._id === id)
}

