import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './commonSlice'

const store = configureStore({
    reducer:{
        commonStore: commonSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store