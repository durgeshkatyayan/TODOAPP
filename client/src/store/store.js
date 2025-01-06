import { configureStore } from '@reduxjs/toolkit'
import userReducer from './counterSlice'
export default configureStore({
  reducer: {
    user:userReducer
  },
})