import { configureStore } from '@reduxjs/toolkit'
import { competitivesReducer } from './slices/competitiveSlice.js'
import { authReducer } from './slices/authSlice.js'

const store = configureStore({
  reducer: {
    competitives: competitivesReducer,
    authReducer
  }
})

export default store
