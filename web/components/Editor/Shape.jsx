import { useRef , useEffect } from 'react'
import {Text , Rect , Circle , Transformer} from 'react-konva'
import {useDispatch} from 'react-redux';
import { setDragProps, setTransformProps } from '../../app/features/canvas/stageSlice';

export default function Shape({type , attrs , isSelected , onSelect}){

    const trRef = useRef();
    const elRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSelected && trRef.current !== null) {
          //trRef.current.rotateAnchorOffset(0);
          // we need to attach transformer manually
          trRef.current.nodes([elRef.current]);
          //trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);


    const onTransform = (e) => {
        if(elRef.current !== null){
            const element = elRef.current;

            const size = {
                width: element.width() * element.scaleX(),
                height: element.height() * element.scaleY()
            }

        element.setAttrs({
            width: size.width,
            ...(type !== 'Text' ? {height : size.height} : {}),
            scaleX : 1,
            ...(type !== 'Text'? {scaleY: 1}: {}),
        })
        }
    }


    const onTransformEnd = (e) => {
            const size = {
                height : Math.floor(e.target.height()),
                width : Math.floor(e.target.width())
            }

            dispatch(setTransformProps({
                id : attrs.id,
                size : {
                    width: size.width,
                    height: size.height
                }
            }))
    }


    const onDragEnd = (e) => {
        const position = {
            x : Math.floor(e.target.x()),
            y: Math.floor(e.target.y())
        }

        dispatch(setDragProps({
            id : attrs.id,
            position
        }))
    }

    const renderShape = () => {
        switch (type) {
            case 'Text':
            return ( 
                <Text 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {() => {}} 
                    onDragEnd = {onDragEnd}  
                    onDragStart = {() => {}} 
                    onClick = {onSelect}
                    onTap = {onSelect}
                    onTransform = {onTransform}
                    onTransformEnd = {onTransformEnd}
                />)
            
            case 'Rect':
            return ( 
                <Rect 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {() => {}} 
                    onDragEnd = {onDragEnd}  
                    onDragStart = {() => {}} 
                    onClick = {onSelect}
                    onTap = {onSelect}
                    onTransform = {onTransform}
                    onTransformEnd = {onTransformEnd}
                />)

            case 'Circle':
            return ( 
                <Circle 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {() => {}} 
                    onDragEnd = {onDragEnd}  
                    onDragStart = {() => {}} 
                    onClick = {onSelect}
                    onTap = {onSelect}
                    onTransform = {onTransform}
                    onTransformEnd = {onTransformEnd}
                />)

            default:
            break;
        }
    }

    return(
        <>
            {renderShape()}
            {isSelected && <Transformer 
                ref = {trRef}
                anchorFill = '#eaf1fe'
                anchorCornerRadius = {50}
                anchorSize={10}
                name = "object"
                anchorStroke = '#216ee0'
                borderDash={[3,3]}
                rotateEnabled={false}
                enabledAnchors={type === 'Text' ? ['middle-left', 'middle-right'] : undefined}
                boundBoxFunc={(oldBox, newBox) => newBox.width < 25 || newBox.height < 5 ? oldBox : newBox}
            />}
        </>
    )
}