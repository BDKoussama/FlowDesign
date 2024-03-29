import { createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo'


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
    background : {
        fill : '#fff',
        fillPatternImage : '',
        type : 'color'
    },
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
        setTemplate(state , action){
            const {template} = action.payload
            const layer = template.children[0]
            const background = layer.children.filter(item => item.attrs.name === 'background')
            const children = layer.children.filter(item => item.attrs.name !== 'background')
            
            return state = {
                ...state , 
                size :{
                    ...template.attrs
                }, 
                background: {   
                    fill : background[0].className === "Rect" ?  background[0].attrs.fill : "",
                    fillPatternImage : background[0].className === "Image"? background[0].attrs.url : "",
                    type : background[0].className === "Image" ? "image" : "color"
                },
                children : children.map(child => {
                    return  {
                        ...child , 
                        attrs : {
                            ...child.attrs,
                            scaleX : child.attrs.scaleX || 1 ,
                            scaleY : child.attrs.scaleY || 1 ,
                        }
                    }

                })
            }
        },
        addShape(state , action){
            state.children.push(action.payload)
        },
        setStageBackground(state, action){
            state.background = {
                ...state.background,
                ...action.payload
            }
        },
        updateElement(state , action){
            // updates height & width & scalex , scaley
            const children = state.children.map((item => item.attrs.id !== action.payload.id ? item : 
                        {
                            ...item,
                            attrs : {
                                ...item.attrs,
                                ...action.payload.attrs,
                                ...(item.attrs.type === 'Image' ? {...action.payload.other} : {})
                            }
                        }
                    ))
            state.children = children  
        },
        deleteElement(state , action){
            state.children = state.children.filter(item => item.attrs.id !== action.payload.id)
        },
        setElementZindex(state , action){
            const {position , id} = action.payload;
            //create a copy of elements array
            const items = state.children.slice();
            //find the selected element 
            const item = items.find(i => i.attrs.id === id)
            //get the index of the selected item 
            const index = items.indexOf(item);
            //remove from the list 
            items.splice(index, 1)

            switch (position) {
                case "FORWARD":
                   items.push(item);
               break;                    
               case "BOTTOM":
                   items.unshift(item)
               break;
               case "UP":
                   items.splice(index + 1 , 0 , item)
               break;
               case "DOWN":
                   items.splice(index - 1 , 0 , item)
               break;
               default:
                   return state;
            }

            state.children = items
        }
    }
})

export const { setStageSize , scaleStage , addShape , setStageBackground , updateElement , deleteElement , setElementZindex , setTemplate} = stageSlice.actions;

export default undoable(stageSlice.reducer);