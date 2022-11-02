import {Rect} from 'react-konva'

export default function StageBackground({width , height , fill}){
    return (
        <Rect   
            x = {0}
            y = {0}
            width = {width}
            height = {height}
            fill = {fill}
            name = 'background'
        />
    )
}