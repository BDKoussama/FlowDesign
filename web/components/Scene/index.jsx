
import React from "react"
import dynamic from "next/dynamic";
import {Button , Tooltip} from 'flowbite-react';
import { LockClosedIcon, Square2StackIcon, Square3Stack3DIcon, TrashIcon } from "@heroicons/react/24/outline";

const Stage = dynamic(() => import("../Editor/StageWrapper"), {
    ssr: false,
  });

export default function Scene({toggle}){
    return (
        <div className='editor-scene--wrapper'>
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
                            <li className="inline-block mr-1">
                                <Tooltip content = "Position">
                                    <button className="text-white hover:bg-gray-700 rounded-full p-1">  
                                        <Square3Stack3DIcon className="h-5 w-5" />
                                    </button> 
                                </Tooltip>
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
            <Stage toggle= {toggle}/>
        </div>  
    )   
}