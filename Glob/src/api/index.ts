import axios from "axios";
import users from './users'

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})
const api = {
    ...users
}
export { instance, api }