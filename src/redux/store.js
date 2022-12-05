import { configureStore } from '@reduxjs/toolkit'
import { competitivesReducer } from './slices/competitive.js'

const store = configureStore({
  reducer: {
    competitives: competitivesReducer
  }
})

export default store