import { EyeIcon, Square2StackIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSelector , useDispatch} from "react-redux"
import { setSelected , updateSelected} from "../../app/features/canvas/selectSlice";
import {deleteElement} from '../../app/features/canvas/stageSlice';

export default function Layers(){

    const {children} = useSelector(state => state.stage)
    const selected = useSelector(state => state.selected)

    const dispatch = useDispatch();

    return(
        <div className="p-4">
            Layers
            <ul className="mt-10 w-full">
                {children.length !== 0 && children.map(item => {
                    return (
                        <li key={item.attrs.id} className = 'my-2' >
                            <button className="bg-gray-700 hover:bg-gray-900 w-full h-full p-2 rounded flex justify-between items-center"
                                style={{ backgroundColor : `${item.attrs.id === selected.item.id ? 'rgb(17 24 39)' : ''}` }}
                                onClick={() => { 
                                    dispatch(setSelected({
                                        id : item.attrs.id,
                                        type : item.attrs.type,
                                        attrs : item.attrs
                                    })) 
                            }}>

                                <div>
                                    <span className="block text-sm text-gray-400">{ item.className }</span>
                                </div>

                                <div className="flex justify-between items-center w-20">
                                    <span className="block cursor-pointer hover:bg-gray-700 p-1 rounded-full" 
                                        onClick={(e) => { 
                                            e.stopPropagation();
                                            dispatch(deleteElement({
                                                id : item.attrs.id
                                            }))
                                            dispatch(setSelected({
                                                type : "",
                                                id : null,
                                                attrs : {}
                                            }))
                                        }} 
                                    >
                                        <TrashIcon className="h-4 w-4 text-white"/>
                                    </span>

                                    <span className="block  cursor-pointer hover:bg-gray-700 p-1 rounded-full"
                                        onClick={(e) => { 
                                            e.stopPropagation();
                                            console.log('Duplicate') 
                                        }}
                                    >
                                        <Square2StackIcon className="h-4 w-4 text-white"/>
                                    </span>

                                    <span className="block cursor-pointer hover:bg-gray-700 p-1 rounded-full"
                                        onClick={(e) => { 
                                            e.stopPropagation();
                                            dispatch(updateSelected({
                                                attrs : {
                                                    ...item.attrs,
                                                    visible : !item.attrs.visible
                                                }
                                            }))
                                        }}
                                    >
                                        <EyeIcon className= { `h-4 w-4 ${item.attrs.visible ? 'text-white' : 'text-gray-500'}` }/>
                                    </span>

                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}