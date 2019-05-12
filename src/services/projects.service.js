import store from '../store/store'

import axios from 'axios'
const url = process.env.API_URL || 'http://localhost:3333/api'
export async function getAllProjects() {
    const { data } = await axios.get(`${url}/software/all`);
    return data;
}
export async function createSoftware({ name }) {
    const { data } = await axios.post(`${url}/software/new`, { name })
    store.dispatch('loadUserProjects');
    return data;
}
export function findProjectById(projects, id) {
    return projects.find((el) => +el.id === +id)
}
