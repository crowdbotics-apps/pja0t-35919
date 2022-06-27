import axios from "axios"
const oop = axios.create({
  baseURL: "https://pja0t-35919.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
