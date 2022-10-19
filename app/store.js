import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../src/features/carSlice'

export const store = configureStore({
    reducer: {
        car: carReducer
    },
})