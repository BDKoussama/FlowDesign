import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const uploadSlice = createSlice({
    name : 'uploads',
    initialState,
    reducers: {
        addItem(state , action ){
            state.push(action.payload)
        }
    }
})

export const { addItem } = uploadSlice.actions;

export default uploadSlice.reducer;