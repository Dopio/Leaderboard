import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  competitives: {
    items: [],
    status: 'loading'
  }
}

const competitivesSlice = createSlice({
  name: 'competitives',
  initialState,
  reducer: {}
})

export const competitivesReducer = competitivesSlice.reducer