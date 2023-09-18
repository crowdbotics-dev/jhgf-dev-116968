import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vbfd_list = createAsyncThunk(
  "vbfds/api_v1_vbfd_list",
  async payload => {
    const response = await apiService.api_v1_vbfd_list(payload)
    return response.data
  }
)
export const api_v1_vbfd_create = createAsyncThunk(
  "vbfds/api_v1_vbfd_create",
  async payload => {
    const response = await apiService.api_v1_vbfd_create(payload)
    return response.data
  }
)
export const api_v1_vbfd_retrieve = createAsyncThunk(
  "vbfds/api_v1_vbfd_retrieve",
  async payload => {
    const response = await apiService.api_v1_vbfd_retrieve(payload)
    return response.data
  }
)
export const api_v1_vbfd_update = createAsyncThunk(
  "vbfds/api_v1_vbfd_update",
  async payload => {
    const response = await apiService.api_v1_vbfd_update(payload)
    return response.data
  }
)
export const api_v1_vbfd_partial_update = createAsyncThunk(
  "vbfds/api_v1_vbfd_partial_update",
  async payload => {
    const response = await apiService.api_v1_vbfd_partial_update(payload)
    return response.data
  }
)
export const api_v1_vbfd_destroy = createAsyncThunk(
  "vbfds/api_v1_vbfd_destroy",
  async payload => {
    const response = await apiService.api_v1_vbfd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vbfdsSlice = createSlice({
  name: "vbfds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_vbfd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vbfd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vbfd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vbfd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vbfd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vbfd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vbfd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vbfd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_vbfd_list,
  api_v1_vbfd_create,
  api_v1_vbfd_retrieve,
  api_v1_vbfd_update,
  api_v1_vbfd_partial_update,
  api_v1_vbfd_destroy,
  slice: vbfdsSlice
}
