import { v4 as uuidv4 } from 'uuid';
import {useDispatch , useSelector} from 'react-redux';
import { addShape } from '../../app/features/canvas/stageSlice';
import ShapeSettings from './Settings/ShapeSettings';

export default function Elements(){

    const dispatch = useDispatch();

    const selectedItem = useSelector(state => state.selected.present.item);

    const {height , width} = useSelector(state => state.stage.present.size)

    const addElement = (type , fill) => {
        const id = uuidv4()

        const size = {
            height : 200 , 
            width : 200
        }

        const attrs = {
            id,
            type,
            x: width / 2,
            y : height / 2,
            width: size.width,
            height: size.height,
            fill: fill ?  '#162132' : '#eaf1fe',
            radius : type === 'Circle' ? 50 : null,
            cornerRadius : 0,
            strokeEnabled : true,
            stroke : '#162132',
            strokeWidth: fill ? 0 : 3,
            shadowColor : '#000000',
            shadowBlur : 0,
            shadowOffsetX : 0,
            shadowOffsetY : 0,
            opacity : 1,
            scaleX : 1 , 
            scaleY : 1,
            offsetX : size.width / 2,
            offsetY: size.height / 2,
            draggable : true ,
            rotation : 0,
            visible : true,
            name : 'object',
        }

        dispatch(addShape({
            className : type,
            attrs
        }))

    }

            if(selectedItem.id !== null && selectedItem.type === "Circle" || selectedItem.type === "Rect"){
                return (<ShapeSettings/>)
            }else{
                return (
                    <div className='p-4'>
                        <h3>Elements & Shapes</h3>
                        <div className="elements-widget mt-10 h-full flex flex-wrap">
                            <div className="element-item_wrapper p-2 flex justify-center items-center m-1">
                                <button className="h-16 w-16 bg-white" onClick={() => addElement('Rect' , true)}></button>
                            </div>
            
                            <div className="element-item_wrapper p-2 flex justify-center items-center m-1">
                                <button className="h-16 w-16 bg-white rounded-full" onClick={() => addElement('Circle' , true)}></button>
                            </div>
            
                            <div className="element-item_wrapper p-2 flex justify-center items-center m-1">
                                <button className="h-16 w-16 bg-[#313f45] border border-4 border-[#0e1214] " onClick={() => addElement('Rect' , false)}></button>
                            </div>
            
                            <div className="element-item_wrapper p-2 flex justify-center items-center m-1 ">
                                <button className="h-16 w-16 bg-[#313f45] rounded-full border border-4 border-[#0e1214]" onClick={() => addElement('Circle' , false)}></button>
                            </div>
            
                        </div>
                    </div>
                )
                
            }
            
        
        
    
}