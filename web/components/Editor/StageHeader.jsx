import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';
import { Dropdown, Tooltip } from 'flowbite-react';
import {useSelector , useDispatch} from 'react-redux';
import LayerControl from '../Layout/LayerControl';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { CloudArrowDownIcon } from '@heroicons/react/24/outline';

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
                    <Dropdown label="Download">
                        <Dropdown.Item icon={CloudArrowDownIcon} onClick={() => downloadAsPng(size , 'png')}>
                            Png
                        </Dropdown.Item>
                        <Dropdown.Item icon={CloudArrowDownIcon} onClick={() => downloadAsPng(size , 'jpeg')}>
                            Jpeg
                        </Dropdown.Item>        
                    </Dropdown>
                </div>
            </div>
    </div>
    )
}