import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cdfs_list = createAsyncThunk(
  "cdfs/api_v1_cdfs_list",
  async payload => {
    const response = await apiService.api_v1_cdfs_list(payload)
    return response.data
  }
)
export const api_v1_cdfs_create = createAsyncThunk(
  "cdfs/api_v1_cdfs_create",
  async payload => {
    const response = await apiService.api_v1_cdfs_create(payload)
    return response.data
  }
)
export const api_v1_cdfs_retrieve = createAsyncThunk(
  "cdfs/api_v1_cdfs_retrieve",
  async payload => {
    const response = await apiService.api_v1_cdfs_retrieve(payload)
    return response.data
  }
)
export const api_v1_cdfs_update = createAsyncThunk(
  "cdfs/api_v1_cdfs_update",
  async payload => {
    const response = await apiService.api_v1_cdfs_update(payload)
    return response.data
  }
)
export const api_v1_cdfs_partial_update = createAsyncThunk(
  "cdfs/api_v1_cdfs_partial_update",
  async payload => {
    const response = await apiService.api_v1_cdfs_partial_update(payload)
    return response.data
  }
)
export const api_v1_cdfs_destroy = createAsyncThunk(
  "cdfs/api_v1_cdfs_destroy",
  async payload => {
    const response = await apiService.api_v1_cdfs_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cdfsSlice = createSlice({
  name: "cdfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cdfs_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdfs_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdfs_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdfs_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdfs_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdfs_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cdfs_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cdfs_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cdfs_list,
  api_v1_cdfs_create,
  api_v1_cdfs_retrieve,
  api_v1_cdfs_update,
  api_v1_cdfs_partial_update,
  api_v1_cdfs_destroy,
  slice: cdfsSlice
}
