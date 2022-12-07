import { configureStore } from '@reduxjs/toolkit'
import { competitivesReducer } from './slices/competitive.js'
import { authReducer } from './slices/auth.js'


const store = configureStore({
  reducer: {
    competitives: competitivesReducer,
    authReducer: authReducer
  }
})

export default store