
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronUpIcon, LockClosedIcon, Square2StackIcon, Square3Stack3DIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip} from 'flowbite-react';
import { useState } from "react";
import {AlignLeft , AlignBottom , AlignCenter , AlignRight , AlignMiddle , AlignTop} from '../Svg/index';
import {useSelector , useDispatch} from 'react-redux';
import {updateSelected , setSelected} from '../../app/features/canvas/selectSlice';
import { setElementZindex , deleteElement , addShape } from '../../app/features/canvas/stageSlice';
import { v4 as uuidv4 } from 'uuid';

export default function LayerControl(){

    const [toggle , setToggle] = useState(false);

    const dispatch = useDispatch();

    const {height , width} = useSelector(state => state.stage.present.size)

    const {children} = useSelector(state => state.stage.present)
   
    const {item : currentElement} = useSelector(state => state.selected.present)

    const item = children.find(el => el.attrs.id === currentElement.id)

    const index = children.indexOf(item)

    const setAlignment = (direction) => {
        const newPosition = {}

        switch (direction) {
            case 'left':
                newPosition = { x : 0 } 
            break;
            case 'center':
                newPosition = {x : width / 2 - currentElement.attrs.width / 2}
            break
            case 'right':
                newPosition = {x : width - currentElement.attrs.width}
            break;
            case 'top':
                newPosition  = { y: 0 }
            break;
            case 'bottom':
                newPosition  = { y : height - currentElement.attrs.height }
            break;
            case 'middle':
                newPosition = {y : height / 2 - currentElement.attrs.height / 2}
            break
            default:
            break;
        }

        dispatch(updateSelected({
            attrs : {
                ...currentElement.attrs,
                ...newPosition
            }
        }))
    }

    const setZindex = (position) => {
        dispatch(setElementZindex({
            id : currentElement.id,
            position
        }))
    }

    return(
        <div className="layer-control w-44">
                    <ul>
                        <li className="inline-block mr-1"> 
                            <Tooltip content = "Delete">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1"
                                    onClick={() => {
                                        dispatch(deleteElement({
                                            id : currentElement.id
                                        }))
                                        dispatch(setSelected({
                                            type : "",
                                            id : null,
                                            attrs : {}
                                        }))
                                    }}
                                >  
                                    <TrashIcon className="h-5 w-5" />
                                </button> 
                            </Tooltip>
                        </li>
                        <li className="inline-block mr-1">
                            <Tooltip content = "Duplicate">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1"
                                    onClick={() => {
                                            const id = uuidv4()
                                            dispatch(addShape({
                                                className : currentElement.type,
                                                attrs : {
                                                    ...currentElement.attrs,
                                                    id
                                                }
                                            })) 
                                    }}
                                >  
                                    <Square2StackIcon className="h-5 w-5" />
                                </button> 
                            </Tooltip>
                        </li>
                        <li className="inline-block mr-1">
                            <Tooltip content = "Lock">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1">  
                                    <LockClosedIcon className="h-5 w-5" />
                                </button> 
                            </Tooltip>
                        </li>
                        <li className="inline-block mr-1 relative">
                            <Tooltip content = "Position">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1" onClick={() => { setToggle(!toggle) }}>  
                                    <Square3Stack3DIcon className="h-5 w-5" />
                                </button> 
                            </Tooltip>
                            {toggle && (
                                <div className='bg-gray-700 w-44 absolute py-2 rounded text-white'>
                                    <ul>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500' 
                                                    disabled = { index === children.length - 1 }  
                                                    onClick={() => { setZindex('FORWARD') }}
                                            >
                                                <ChevronDoubleUpIcon className='h-5 w-5 mr-3' />
                                                <span className='block'>To Forward</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    disabled = { index === children.length - 1 }  
                                                    onClick={() => { setZindex('UP') }}
                                            >
                                                <ChevronUpIcon  className='h-5 w-5  mr-3'/>
                                                <span className='block'>Up</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    disabled = { index === 0 }  
                                                    onClick={() => { setZindex('DOWN') }}
                                            >
                                                <ChevronDownIcon  className='h-5 w-5  mr-3'/>
                                                <span className='block'>Down</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    disabled = { index === 0 }  
                                                    onClick={() => { setZindex('BOTTOM') }}
                                            >
                                                <ChevronDoubleDownIcon className='h-5 w-5  mr-3'/>
                                                <span className='block'>Bottom</span>
                                            </button>
                                        </li>
                                        <li>
                                            <span className='block h-0.5 w-full bg-gray-600'></span>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('left')}>
                                                <AlignLeft height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block'>Align Left</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('center')}>
                                                <AlignCenter height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block'>Align Center</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('right')}>
                                                <AlignRight height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block'>Align Right</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('top')}>
                                                <AlignTop height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block'>Align Top</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('middle')}>
                                                <AlignMiddle height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block'>Align Middle</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('bottom')}>
                                                <AlignBottom height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block'>Align Bottom </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </li>
                    </ul>
                </div>
    )
}