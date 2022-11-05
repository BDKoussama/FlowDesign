import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux';
import { addShape } from '../../app/features/canvas/stageSlice';

export default function Elements(){

    const dispatch = useDispatch();

    const addElement = (type , fill) => {
        const id = uuidv4()

        const attrs = {
            id,
            type,
            x: 100,
            y : 100,
            width: 150,
            height: 150,
            fill: fill ?  '#162132' : '#eaf1fe',
            radius : type === 'Circle' ? 50 : null,
            strokeEnabled : true,
            stroke : '#162132',
            strokeWidth: fill ? 0 : 3,
            opacity : 1,
            scaleX : 1 , 
            scaleY : 1,
            draggable : true ,
            rotation : 0,
            name : 'object',
        }

        dispatch(addShape({
            className : type,
            attrs
        }))

    }

    return(
        <div>
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