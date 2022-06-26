import axios from "axios"
const pjatonSnapchat = axios.create({
  baseURL: "https://story.snapchat.com/@pja0t",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function pja0tonsnapchat_get__read(payload) {
  return pjatonSnapchat.get(`/`)
}
export const apiService = { pja0tonsnapchat_get__read }
