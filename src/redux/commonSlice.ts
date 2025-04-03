import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isReduxMobile: false,
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setIsReduxMobile:(state,action:PayloadAction<boolean>) => {
            state.isReduxMobile = action.payload
        }
    }
})

export const {setIsReduxMobile} = commonSlice.actions

export default commonSlice.reducer
export type commonSlice = typeof initialState