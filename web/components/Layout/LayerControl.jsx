
import { ArrowPathRoundedSquareIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronUpIcon, LockClosedIcon, Square2StackIcon, Square3Stack3DIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip} from 'flowbite-react';
import { useState } from "react";
import {AlignLeft , AlignBottom , AlignCenter , AlignRight , AlignMiddle , AlignTop, Flip, FlipH, FlipV} from '../Svg/index';
import {useSelector , useDispatch} from 'react-redux';
import {updateSelected , setSelected} from '../../app/features/canvas/selectSlice';
import { setElementZindex , deleteElement , addShape } from '../../app/features/canvas/stageSlice';
import { v4 as uuidv4 } from 'uuid';
import useClickOutside from '../../hooks/useClickOutside';

export default function LayerControl(){

    const [toggle , setToggle] = useState(false);

    const [flip , setFlip] = useState(false)

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
                newPosition = { x : currentElement.attrs.width / 2 } 
            break;
            case 'center':
                newPosition = {x : width / 2}
            break
            case 'right':
                  newPosition = {x : width - currentElement.attrs.width / 2}
            break;
            case 'top':
                newPosition  = { y: currentElement.attrs.height / 2 }
            break;
            case 'bottom':
                newPosition  = { y : height - currentElement.attrs.height / 2 }
            break;
            case 'middle':
                newPosition = {y : height / 2}
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


    const flipH = () => {
        dispatch(updateSelected({
            attrs : {
                ...currentElement.attrs,
                offsetX : currentElement.attrs.width / 2,
                offsetY: currentElement.attrs.height / 2,
                scaleX : -currentElement.attrs.scaleX,
            }
        }))
    }

    const flipV = () => {
        dispatch(updateSelected({
            attrs : {
                ...currentElement.attrs,
                offsetX : currentElement.attrs.width / 2,
                offsetY: currentElement.attrs.height / 2,
                scaleY : -currentElement.attrs.scaleY,
            }
        }))
    }


    const ref = useClickOutside(() => { setToggle(false) });

    const flipRef = useClickOutside(() => { setFlip(false) })

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
                        <li className="hidden inline-block mr-1">
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
                                <div className='bg-gray-700 w-44 absolute py-2 rounded text-white' ref={ref}>
                                    <ul>
                                        <li className="px-3 py-2"><span className="block text-md"> Layering </span></li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500' 
                                                    disabled = { index === children.length - 1 }  
                                                    onClick={() => { setZindex('FORWARD') }}
                                            >
                                                <ChevronDoubleUpIcon className='h-5 w-5 mr-3' />
                                                <span className='block text-sm'>To Forward</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    disabled = { index === children.length - 1 }  
                                                    onClick={() => { setZindex('UP') }}
                                            >
                                                <ChevronUpIcon  className='h-5 w-5  mr-3'/>
                                                <span className='block text-sm'>Up</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    disabled = { index === 0 }  
                                                    onClick={() => { setZindex('DOWN') }}
                                            >
                                                <ChevronDownIcon  className='h-5 w-5  mr-3'/>
                                                <span className='block text-sm'>Down</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    disabled = { index === 0 }  
                                                    onClick={() => { setZindex('BOTTOM') }}
                                            >
                                                <ChevronDoubleDownIcon className='h-5 w-5  mr-3'/>
                                                <span className='block text-sm'>Bottom</span>
                                            </button>
                                        </li>
                                        <li>
                                            <span className='block h-0.5 w-full bg-gray-600'></span>
                                        </li>
                                        <li className="px-3 py-2"><span className="block text-md"> Position </span></li>

                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('left')}>
                                                <AlignLeft height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block text-sm'>Align Left</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('center')}>
                                                <AlignCenter height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block text-sm'>Align Center</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('right')}>
                                                <AlignRight height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block text-sm'>Align Right</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('top')}>
                                                <AlignTop height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block text-sm'>Align Top</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('middle')}>
                                                <AlignMiddle height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block text-sm'>Align Middle</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' onClick={() => setAlignment('bottom')}>
                                                <AlignBottom height="24px" width="24px" fill="#ffffff"/>
                                                <span className='ml-3 block text-sm'>Align Bottom </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </li>

                        { currentElement.type !== 'Text' && (
                            <li className="inline-block mr-1 relative">
                            <Tooltip content = "Flip">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1" onClick={() => { setFlip(!flip) }}>  
                                    <Flip height= "22px" width = "22px" fill = "#ffffff"/>
                                </button> 
                            </Tooltip>
                            {flip && (
                                <div className='bg-gray-700 w-44 absolute py-2 rounded text-white' ref={flipRef}>
                                    <ul>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500' 
                                                    onClick={flipH}
                                            >
                                                <FlipH height= "20px" width = "20px" fill = "#ffffff"/>
                                                <span className='block ml-3 text-sm'>Flip Horizontally</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600 disabled:text-gray-500'
                                                    onClick={flipV}
                                            >
                                                <FlipV height= "20px" width = "20px" fill = "#ffffff"/>
                                                <span className='block ml-3 text-sm'>Flip Vertically</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        ) }
                    </ul>
                </div>
    )
}