import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  competitive: {
    students: [],
    status: 'loading'
  }
}

const competitivesSlice = createSlice({
  name: 'competitives',
  initialState,
  reducer: {}
})

export const competitivesReducer = competitivesSlice.reducer