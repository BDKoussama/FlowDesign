import {Text , Rect , Circle} from 'react-konva'


export default function Shape({type , attrs}){
    const renderShape = () => {
        switch (type) {
            case 'Text':
            return (<Text {...attrs} onDragMove = {() => {}} onDragEnd = {() => {}}  onDragStart = {() => {}} />)
            
            case 'Rect':
            return (<Rect {...attrs} onDragMove = {() => {}} onDragEnd = {() => {}}  onDragStart = {() => {}} />)

            case 'Circle':
            return (<Circle {...attrs} onDragMove = {() => {}} onDragEnd = {() => {}}  onDragStart = {() => {}} />)

            default:
            break;
        }
    }

    return(
        <>
            {renderShape()}
        </>
    )
}