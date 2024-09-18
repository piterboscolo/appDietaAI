
import axios from "axios";

// http://0.0.0.0:3333 /create
export const api = axios.create({
    baseURL: "http://10.39.52.87:3333"
})
