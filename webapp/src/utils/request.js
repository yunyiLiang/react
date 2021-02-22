import axios from 'axios';
let baseUrl = 'http://47.98.51.123:2000'

let request = axios.create({
   baseURL:baseUrl + '/'
})

export default request;