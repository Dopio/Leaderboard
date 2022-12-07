import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../axios.js"

export const fetcAuth = createAsyncThunk('/auth/fetchUserData', async (params) => {
  const { data } = await axios.post('/auth/login', params)
  return data
})

const initialState = {
  data: null,
  status: 'loading'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null
    }
  },
  extraReducers: {
    [fetcAuth.pending]: (state) => { //Отлавливание состояния при загрузке
      state.status = 'loading'
      state.data = null
    },
    [fetcAuth.fulfilled]: (state, action) => { //Отлавливание состояния при успешном выполнении запроса
      state.status = 'loaded'
      state.data = action.payload
    },
    [fetcAuth.rejected]: (state) => { //Отлавливание состояния при ошибке
      state.status = 'error'
      state.data = null
    }
  }
})

export const selectIsAuth = (state) => Boolean(state.authReducer.data)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions