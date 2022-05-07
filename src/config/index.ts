import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'http://localhost:8080',
})

export default instanceAxios
