import { createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo'

const initialState = {
    item : {
        type: '' ,
        id: null , 
        attrs: {},
        
    }
}

const selectSlice = createSlice({
    name : 'selected',
    initialState , 
    reducers : {
        setSelected(state , action) {
            state.item = {...state.item , 
                    ...action.payload }
        },
        setTransformProps(state , action){
            // updates height & width & scalex , scaley
            state.item = {
                ...state.item,
                attrs : {
                    ...state.item.attrs,
                    ...action.payload.size,
                    ...(state.item.attrs.type === 'Image' ? {...action.payload.other} : {})
                }
               
            }
        },
        setDragProps(state , action){
            //updates x & y
            state.item = {
                ...state.item,
                attrs : {
                    ...state.item.attrs,
                    ...action.payload.position,
                }
            }
        },
        updateSelected(state , action) {
            state.item = {
                ...state.item ,
                attrs : {
                    ...action.payload.attrs
                }
            }
        }
    }
})


export const {setSelected , updateSelected , setTransformProps , setDragProps } = selectSlice.actions;

export default undoable(selectSlice.reducer);