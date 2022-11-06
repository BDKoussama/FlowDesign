import { Stage, Layer, Rect, Circle } from 'react-konva';
import StageBackground from '../Editor/StageBackground';
import { useRef} from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Zoom from './Zoom';
import { useDispatch, useSelector } from 'react-redux';
import { scaleStage } from '../../app/features/canvas/stageSlice';
import Shape from './Shape';


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

    const dispatch = useDispatch();

    // dispatch stage scale
    const zoom = (direction) => {
        dispatch(scaleStage({direction})) 
    }

    return(
        <div className={`stage-wrapper ${( parentSize.height >= initialHeight && parentSize.width >= initialWidth ) ? 'center-stage' : '' }`}  ref={wrapper}>
            <Zoom scale = {scale.x} zoom = {zoom} />
            <div className='stage' style = {{ height : `${initialHeight}px` , width : `${initialWidth}px`}} >
                <Stage width={initialWidth} height={initialHeight} scaleX = {scale.x} scaleY = {scale.y}>
                    <Layer>
                        {type !== null ? <StageBackground height={height} width = {width} fill = {fill} type = {type} fillPatternImage = {fillPatternImage}/> : null}
                        {children.length !== 0 && (
                            children.map(item => {
                                return (<Shape key={item.attrs.id} attrs = {item.attrs} type = {item.attrs.type}/>)
                            }))
                        }
                    </Layer>
                </Stage>
            </div>
        </div>   
    )
}