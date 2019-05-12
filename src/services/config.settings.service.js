import axios from 'axios'
console.log(process.env)
const url = process.env.API_URL || 'http://localhost:3333/api'

export async function getConfigSettings() {
    const { data } = await axios.get(`${url}/config`);
    return data;
}