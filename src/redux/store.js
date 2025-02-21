import { configureStore } from '@reduxjs/toolkit'
import pastesReducer from "../features/pasteSlice"

export const store = configureStore({
  reducer: {
    paste: pastesReducer,
  },
})