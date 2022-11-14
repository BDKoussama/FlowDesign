import { useRef , useEffect } from 'react'
import {Text , Rect , Circle , Transformer} from 'react-konva'
import {useDispatch} from 'react-redux';
import { setDragProps, setSelected, setTransformProps } from '../../app/features/canvas/selectSlice';
import { updateElement } from '../../app/features/canvas/stageSlice';

export default function Shape({type , attrs , isSelected , onSelect , onSnap}){

    const trRef = useRef();
    const elRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSelected && trRef.current !== null) {
          //trRef.current.rotateAnchorOffset(0);
          // we need to attach transformer manually
          trRef.current.nodes([elRef.current]);
          trRef.current.attachTo(elRef.current);

          //trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);


    const onTransform = (e) => {
        if(elRef.current !== null){
            //onSnap(e)
            const element = elRef.current;

            const size = {
                width: element.width() * element.scaleX(),
                height: element.height() * element.scaleY()
            }

            element.setAttrs({
                width: Math.abs(size.width),
                ...(type !== 'Text' ? 
                    { 
                        height : Math.abs(size.height)
                    } : {}),
                scaleX : element.scaleX() < 0 ? -1 : 1,
                ...(type !== 'Text'? 
                    { 
                        scaleY: element.scaleY() < 0 ? -1 : 1,
                    }: {}),
                offsetX : Math.abs(size.width / 2),
                offsetY : Math.abs(size.height / 2)
            })
        }
    }


    const onTransformEnd = (e) => {
            const size = {
                height : Math.floor(e.target.height()),
                width : Math.floor(e.target.width())
            }

            dispatch(setTransformProps({
                size : {
                    width: size.width,
                    ...(type !== 'Text' ? 
                    { 
                        height : size.height
                    } : {}),
                }
            }))
    }


    const onDragEnd = (e) => {

        //elRef.current.name('object');

        const position = {
            x : Math.floor(e.target.x()),
            y: Math.floor(e.target.y())
        }

        if(isSelected){
            dispatch(setDragProps({
                position
            }))
        }else{
            dispatch(updateElement({
                id : attrs.id,
                attrs : {
                    x : position.x,
                    y : position.y,
                }
            }))
        }
        
    }

    const renderShape = () => {
        switch (type) {
            case 'Text':
            return ( 
                <Text 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {onSnap} 
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
                    onDragMove = {onSnap} 
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
                    onDragMove = {onSnap} 
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
                anchorStroke = '#216ee0'
                borderDash={[3,3]}
                rotateEnabled={false}
                enabledAnchors={type === 'Text' ? ['middle-left', 'middle-right'] : undefined}
                boundBoxFunc={(oldBox, newBox) => newBox.width < 25 || newBox.height < 5 ? oldBox : newBox}
            />}
        </>
    )
}