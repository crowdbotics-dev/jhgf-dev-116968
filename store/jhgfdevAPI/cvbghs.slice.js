import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvbgh_list = createAsyncThunk(
  "cvbghs/api_v1_cvbgh_list",
  async payload => {
    const response = await apiService.api_v1_cvbgh_list(payload)
    return response.data
  }
)
export const api_v1_cvbgh_create = createAsyncThunk(
  "cvbghs/api_v1_cvbgh_create",
  async payload => {
    const response = await apiService.api_v1_cvbgh_create(payload)
    return response.data
  }
)
export const api_v1_cvbgh_retrieve = createAsyncThunk(
  "cvbghs/api_v1_cvbgh_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvbgh_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvbgh_update = createAsyncThunk(
  "cvbghs/api_v1_cvbgh_update",
  async payload => {
    const response = await apiService.api_v1_cvbgh_update(payload)
    return response.data
  }
)
export const api_v1_cvbgh_partial_update = createAsyncThunk(
  "cvbghs/api_v1_cvbgh_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvbgh_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvbgh_destroy = createAsyncThunk(
  "cvbghs/api_v1_cvbgh_destroy",
  async payload => {
    const response = await apiService.api_v1_cvbgh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvbghsSlice = createSlice({
  name: "cvbghs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cvbgh_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbgh_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbgh_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbgh_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbgh_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbgh_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvbgh_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvbgh_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cvbgh_list,
  api_v1_cvbgh_create,
  api_v1_cvbgh_retrieve,
  api_v1_cvbgh_update,
  api_v1_cvbgh_partial_update,
  api_v1_cvbgh_destroy,
  slice: cvbghsSlice
}
