import { Stage, Layer, Rect, Circle } from 'react-konva';
import StageBackground from '../Editor/StageBackground';
import { useRef} from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Zoom from './Zoom';


export default function StageWrapper({toggle}){

    const wrapper = useRef();

    const [size , setSize] = useState({
        height: 500,
        width: 500
    })

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
    },[toggle]) 

    const zoomIn = () => {
        // update size
        setSize({
            height: size.height + 200,
            width: size.width + 200
        })
    }

    const zoomOut = () => {
        setSize({
            height: size.height - 200,
            width: size.width - 200
        })
    }

    return(
        <div className={`stage-wrapper ${( parentSize.height >= size.height && parentSize.width >= size.width ) ? 'center-stage' : '' }`}  ref={wrapper}>
            <Zoom zoomIn={zoomIn} zoomOut = {zoomOut} />
            <div className='stage' style = {{ height : `${size.height}px` , width : `${size.width}px` }} >
                <Stage width={size.width} height={size.height}>
                    <Layer>
                        <StageBackground height={size.height} width = {size.width} fill = "#2F2F" />
                        <Rect width={50} height={50} fill="red" />
                        <Circle x={50} y={50} stroke="black" radius={50} />
                    </Layer>
                </Stage>
            </div>
        </div>   
    )
}