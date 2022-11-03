import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    size : {
        type : "ig-post",
        height: 1080,
        width: 1080
    },
    scale : {
        x : 1,
        y: 1
    },
    children : {},
    background : {},
    className : "stage"
}

const stageSlice = createSlice({
    name : 'stage',
    initialState,
    reducers : {
        setStageSize(state , action) {
            state.size = {
                ...state.size,
                ...action.payload
            }
        },
        scaleStage(state, action) {
            state.scale = {
                ...action.payload
            }
        }
    }
})

export const { setStageSize } = stageSlice.actions;
export default stageSlice.reducer;