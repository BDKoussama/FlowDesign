import { useRef , useEffect } from 'react'
import {Text , Rect , Circle , Transformer} from 'react-konva'


export default function Shape({type , attrs , isSelected , onSelect}){

    const trRef = useRef();
    const elRef = useRef();

    useEffect(() => {
        if (isSelected && trRef.current !== null) {
          //trRef.current.rotateAnchorOffset(0);
          // we need to attach transformer manually
          trRef.current.nodes([elRef.current]);
          //trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    const renderShape = () => {
        switch (type) {
            case 'Text':
            return ( 
                <Text 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {() => {}} 
                    onDragEnd = {() => {}}  
                    onDragStart = {() => {}} 
                    onClick = {onSelect}
                    onTap = {onSelect}
                />)
            
            case 'Rect':
            return ( 
                <Rect 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {() => {}} 
                    onDragEnd = {() => {}}  
                    onDragStart = {() => {}} 
                    onClick = {onSelect}
                    onTap = {onSelect}
                />)

            case 'Circle':
            return ( 
                <Circle 
                    {...attrs} 
                    ref = {elRef}
                    onDragMove = {() => {}} 
                    onDragEnd = {() => {}}  
                    onDragStart = {() => {}} 
                    onClick = {onSelect}
                    onTap = {onSelect}
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
                boundBoxFunc={(oldBox, newBox) => newBox.width < 100 ? oldBox : newBox}
            />}
        </>
    )
}