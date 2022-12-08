import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../axios.js"

export const fetchCompetitives = createAsyncThunk('/competitives/fetchCompetitives', async () => {
  const { data } = await axios.get('/competitive')
  return data
})

const initialState = {
  competitives: {
    items: [],
    status: 'loading'
  }
}

const competitivesSlice = createSlice({
  name: 'competitive',
  initialState,
  reducers: {}, //Методы позволяющие обновлять state
  extraReducers: {
    [fetchCompetitives.pending]: (state) => { //Отлавливание состояния при загрузке
      state.competitives.items = []
      state.competitives.status = 'loading'
    },
    [fetchCompetitives.fulfilled]: (state, action) => { //Отлавливание состояния при успешном выполнении запроса
      state.competitives.items = action.payload
      state.competitives.status = 'loaded'
    },
    [fetchCompetitives.rejected]: (state) => { //Отлавливание состояния при ошибке
      state.competitives.items = []
      state.competitives.status = 'error'
    }
  }
})

export const competitivesReducer = competitivesSlice.reducer