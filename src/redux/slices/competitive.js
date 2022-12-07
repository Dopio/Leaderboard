import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../axios.js"

export const fetchCompetitives = createAsyncThunk('/competitive/fetchCompetitives', async () => {
  const { data } = await axios.get('/competitive/638f90c9a91ccd55e46ae81c')
  return data
})

const initialState = {
  competitive: {
    students: {},
    status: 'loading'
  }
}

const competitivesSlice = createSlice({
  name: 'competitives',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCompetitives.pending]: (state) => { //Отлавливание состояния при загрузке
      state.competitive.items = []
      state.competitive.status = 'loading'
    },
    [fetchCompetitives.fulfilled]: (state, action) => { //Отлавливание состояния при успешном выполнении запроса
      state.competitive.items = action.payload
      state.competitive.status = 'loaded'
    },
    [fetchCompetitives.rejected]: (state) => { //Отлавливание состояния при ошибке
      state.competitive.items = []
      state.competitive.status = 'error'
    }
  }
})

export const competitivesReducer = competitivesSlice.reducer