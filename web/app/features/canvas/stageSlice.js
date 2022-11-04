import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    size : {
        type : "ig-post",
        height: 1080,
        width: 1080,
        initialWidth : 1080 ,
        initialHeight : 1080 ,
        heightAmount : 108,
        widthAmount: 108,
        scale : {
            x : 1 ,
            y : 1
        }
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
        },
        setStageBackground(state, action){

        }
    }
})

export const { setStageSize , scaleStage } = stageSlice.actions;

export default stageSlice.reducer;