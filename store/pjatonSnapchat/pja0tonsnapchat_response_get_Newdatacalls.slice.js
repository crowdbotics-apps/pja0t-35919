import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const pja0tonsnapchat_get__read = createAsyncThunk(
  "pja0tonsnapchat_response_get_Newdatacalls/pja0tonsnapchat_get__read",
  async payload => {
    const response = await apiService.pja0tonsnapchat_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const pja0tonsnapchat_response_get_NewdatacallsSlice = createSlice({
  name: "pja0tonsnapchat_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [pja0tonsnapchat_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [pja0tonsnapchat_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [pja0tonsnapchat_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  pja0tonsnapchat_get__read,
  slice: pja0tonsnapchat_response_get_NewdatacallsSlice
}
