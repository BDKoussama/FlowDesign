import { Stage, Layer, Rect, Circle } from 'react-konva';

export default function StageWrapper(){
    return(
        <Stage width={500} height={500}>
            <Layer>
                <Rect width={50} height={50} fill="red" />
                <Circle x={200} y={200} stroke="black" radius={50} />
            </Layer>
        </Stage>   
    )
}