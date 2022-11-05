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
    children : [],
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
            const {direction} =  action.payload;
            const {size} = state;

            const scale = {
                x : 0,
                y : 0
            }

            if(direction === "out") {
                scale.x = (size.initialWidth - size.widthAmount) / size.width;
                scale.y = (size.initialHeight - size.heightAmount) / size.height;
            }else{
                scale.x = (size.initialWidth + size.widthAmount) / size.width;
                scale.y = (size.initialHeight + size.heightAmount) / size.height;
            }

            const newSizes = {
                height: size.height * scale.y ,
                width : size.width * scale.x
            }

            state.size = {
                ...state.size,
                initialHeight : newSizes.height,
                initialWidth : newSizes.width,
                scale: scale
            }
        },
        addShape(state , action){
            state.children.push(action.payload)
        },
        setStageBackground(state, action){

        }
    }
})

export const { setStageSize , scaleStage , addShape} = stageSlice.actions;

export default stageSlice.reducer;