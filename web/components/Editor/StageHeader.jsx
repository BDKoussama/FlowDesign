import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';
import {Button , Tooltip } from 'flowbite-react';
import {useSelector , useDispatch} from 'react-redux';
import LayerControl from '../Layout/LayerControl';
import { ActionCreators as UndoActionCreators } from 'redux-undo'

export default function StageHeader({downloadAsJson , downloadAsPng}){

    const {item} = useSelector(state => state.selected.present)

    const { size } = useSelector((state) => state.stage.present)

    const dispatch = useDispatch()

    const canUndo = useSelector(state => state.selected.past).length > 0
    const canRedo = useSelector(state => state.selected.future).length > 0

    return (
        <div className='stage-header w-full h-[70px] bg-gray-800  z-10 py-2 px-3 '>
            <div className="h-full w-full flex flex-row justify-between items-center">
                
                <div className='w-44'>
                    {item.id !== null && (<LayerControl />)}
                </div>
                

                <div className='undo-redo w-20 flex justify-between items-center'>
                    <Tooltip content = "Undo">
                        <button className="text-white hover:bg-gray-700 rounded-full p-1 disabled:text-gray-600" onClick={() => dispatch(UndoActionCreators.undo())} disabled = {!canUndo}>  
                            <ArrowUturnLeftIcon className="h-5 w-5" />
                        </button> 
                    </Tooltip>
                    <span className='block w-0.5 h-5 bg-gray-700'></span>
                    <Tooltip content = "Redo">
                        <button className="text-white hover:bg-gray-700 rounded-full p-1 disabled:text-gray-600" onClick={() => dispatch(UndoActionCreators.redo())} disabled = {!canRedo}>  
                            <ArrowUturnRightIcon className="h-5 w-5" />
                        </button> 
                    </Tooltip>
                </div>

                <div className="download-stage flex ">
                    <Button className='rounded-full mx-1' onClick={() => downloadAsJson(size)}>
                        Json
                    </Button>

                    <Button className='rounded-full mx-1' onClick={() => downloadAsPng(size.width , size.height)}>
                        Png
                    </Button>
                </div>
            </div>
    </div>
    )
}