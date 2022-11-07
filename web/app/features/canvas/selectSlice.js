import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    item : {
        type: '' ,
        id: null , 
        attrs: {},
        onTransform : {
            x : 0 ,
            y : 0 ,
            size : {
                height : 0 ,
                width : 0 
            }
        }
    }
}

const selectSlice = createSlice({
    name : 'selected',
    initialState , 
    reducers : {
        setSelected(state , action) {
            state.item = {...state.item , 
                    ...action.payload }
        }
    }
})


export const {setSelected} = selectSlice.actions;

export default selectSlice.reducer;