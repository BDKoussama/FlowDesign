import { Stage, Layer, Rect, Circle } from 'react-konva';
import StageBackground from '../Editor/StageBackground';
import { useRef} from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Zoom from './Zoom';
import { useDispatch, useSelector } from 'react-redux';


export default function StageWrapper({toggle}){

    const wrapper = useRef();

    const [parentSize , setParentSize] = useState({
        height: 0,
        width: 0
    })

    useLayoutEffect(() => {
        if(wrapper.current){
            const {height , width} = wrapper.current.getBoundingClientRect();
            setParentSize({
                height,
                width
            })
        }
    },[]) 

    const {
        height , 
        width , 
        initialWidth,
        initialHeight ,
        scale,
    } = useSelector((state) => state.stage.size)

    const zoomIn = () => {
        // update size
       
    }

    const zoomOut = () => {
        
    }

    return(
        <div className={`stage-wrapper ${( parentSize.height >= initialHeight && parentSize.width >= initialWidth ) ? 'center-stage' : '' }`}  ref={wrapper}>
            <Zoom zoomIn={zoomIn} zoomOut = {zoomOut} />
            <div className='stage' style = {{ height : `${initialHeight}px` , width : `${initialWidth}px`}} >
                <Stage width={initialWidth} height={initialHeight} scaleX = {scale.x} scaleY = {scale.y}>
                    <Layer>
                        <StageBackground height={height} width = {width} fill = "#bdc3bd" />
                    </Layer>
                </Stage>
            </div>
        </div>   
    )
}