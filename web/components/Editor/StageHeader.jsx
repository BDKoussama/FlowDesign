import {Button , Tooltip , Footer} from 'flowbite-react';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronUpIcon, LockClosedIcon, Square2StackIcon, Square3Stack3DIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';

export default function StageHeader(){

    const [toggle , setToggle] = useState(false);

    return (
        <div className='stage-header w-full h-[70px] bg-gray-800 absolute top-0 z-10 py-2 px-3'>
            <div className="h-full w-full flex flex-row justify-between items-center">
                <div className="layer-control">
                    <ul>
                        <li className="inline-block mr-1"> 
                            <Tooltip content = "Delete">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1">  
                                    <TrashIcon className="h-5 w-5" />
                                </button> 
                            </Tooltip>
                        </li>
                        <li className="inline-block mr-1">
                            <Tooltip content = "Duplicate">
                                <button className="text-white hover:bg-gray-700 rounded-full p-1">  
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
                                <div className='bg-gray-700 w-44 h-[400px] absolute rounded text-white'>
                                    <ul>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600' >
                                                <ChevronDoubleUpIcon className='h-5 w-5 mr-3' />
                                                <span className='block'>To Forward</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600'>
                                                <ChevronUpIcon  className='h-5 w-5  mr-3'/>
                                                <span className='block'>Up</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600'>
                                                <ChevronDownIcon  className='h-5 w-5  mr-3'/>
                                                <span className='block'>Down</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='px-3 py-2 flex justify-start items-center w-full hover:bg-gray-600'>
                                                <ChevronDoubleDownIcon className='h-5 w-5  mr-3'/>
                                                <span className='block'>Bottom</span>
                                            </button>
                                        </li>
                                        
                                    </ul>
                                </div>
                            )}

                        </li>
                    </ul>
                </div>
                <div className="download-stage">
                    <Button>
                        Download
                    </Button>
                </div>
            </div>
    </div>
    )
}