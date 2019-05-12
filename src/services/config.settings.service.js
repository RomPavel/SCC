import axios from 'axios'
const url = process.env.API_URL || 'http://localhost:3333/api'

export async function getConfigSettings() {
    const { data } = await axios.get(`${url}/config`);
    return data;
}