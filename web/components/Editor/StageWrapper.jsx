import { Stage, Layer, Rect, Circle } from 'react-konva';
import StageBackground from '../Editor/StageBackground';
import { useRef} from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Zoom from './Zoom';
import { useDispatch, useSelector } from 'react-redux';
import { scaleStage } from '../../app/features/canvas/stageSlice';
import Shape from './Shape';
import CustomImage from './CustomImage';
import { setSelected } from '../../app/features/canvas/selectSlice';


export default function StageWrapper({toggle}){

    const wrapper = useRef();

    const [parentSize , setParentSize] = useState({
        height: 0,
        width: 0
    })

    // get stage wrapper bounds 
    useLayoutEffect(() => {
        if(wrapper.current){
            const {height , width} = wrapper.current.getBoundingClientRect();
            setParentSize({
                height,
                width
            })
        }
    },[]) 

    // get stage props from store
    const {
        height , 
        width , 
        initialWidth,
        initialHeight ,
        scale,
    } = useSelector((state) => state.stage.size)

    // get all childre elements from store
    const { children } = useSelector((state) => state.stage)

    // get stage background from store
    const {fillPatternImage , type , fill } = useSelector((state) => state.stage.background)
    
    const selected = useSelector(state => state.selected);

    const dispatch = useDispatch();

    // dispatch stage scale
    const zoom = (direction) => {
        dispatch(scaleStage({direction})) 
    }


    //deselect all items
    const checkDeslect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        const clickedOnBg = e.target?.attrs?.name === "background"
        if (clickedOnEmpty || clickedOnBg) {
            dispatch(setSelected({
                type : "",
                id : null
            }))
        }
    }

    return(
        <div className={`stage-wrapper ${( parentSize.height >= initialHeight && parentSize.width >= initialWidth ) ? 'center-stage' : '' }`}  ref={wrapper}>
            <Zoom scale = {scale.x} zoom = {zoom} />
            <div className='stage' style = {{ height : `${initialHeight}px` , width : `${initialWidth}px`}} >
                <Stage 
                    width={initialWidth} 
                    height={initialHeight} 
                    scaleX = {scale.x} 
                    scaleY = {scale.y} 
                    onMouseDown = {checkDeslect}
                    onTouchStart = {checkDeslect}
                >
                    <Layer>
                        {type !== null ? 
                            <StageBackground 
                                height={height} 
                                width = {width} 
                                fill = {fill} 
                                type = {type} 
                                fillPatternImage = {fillPatternImage}
                                onMouseDown = {checkDeslect}
                                onTouchStart = {checkDeslect}
                            /> : null 
                                
                            }
                        {children.length !== 0 && (
                            children.map(item => {
                                if(item.className === "Image"){
                                    return (
                                        <CustomImage key={item.attrs.id} attrs = {item.attrs} url = {item.attrs.url} />)
                                }
                                return (
                                    <Shape 
                                        key={item.attrs.id} 
                                        attrs = {item.attrs} 
                                        type = {item.attrs.type} 
                                        isSelected = {item.attrs.id === selected.item.id}  
                                        onSelect = {() => {
                                            dispatch(setSelected({
                                                id : item.attrs.id,
                                                type : item.attrs.type
                                            }))
                                        }}
                                    />)
                            }))
                        }
                    </Layer>
                </Stage>
            </div>
        </div>   
    )
}