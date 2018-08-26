import axios from 'axios'
import ENV from '../constants/env'

const { BASE_URL, REQUEST_TIMEOUT } = ENV.API

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = REQUEST_TIMEOUT

export default axios
