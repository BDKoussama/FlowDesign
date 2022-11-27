import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { useContext } from 'react'
import { WidgetContext } from '../../context/WidgetContext';
import {Templates , TextWidget , Photos , Elements , Upload , Background , Layers , Resize , Stickers } from '../Widgets/index';

export default function Widget({toggle , setToggle}){

    const {widget} = useContext(WidgetContext);

    useEffect(() => {
        setToggle(false);
    },[widget])

    const handleRender = () => {
        switch (widget) {
            case 'template':
                return <Templates/>
            
            case 'text':
                return <TextWidget/>

            case 'photos':
                return <Photos/>
            
            case 'elements':
                return <Elements/>

            case 'upload':
                return <Upload/>

            case 'background':
                return <Background/>

            case 'layers':
                return <Layers/>
            
            case 'resize':
                return <Resize/>
            case 'stickers':
                return <Stickers/>
            default: 
                return <Templates/>
        }
    }

    return (
        <div className='hidden md:flex items-center justify-center editor-widget--wrapper bg-gray-800' style={{ marginLeft : `${ toggle ? -350  : 0}px` }}>
            <div className='editor-widget--content text-white overflow-hidden'>
                {handleRender()}
            </div>
            <span className='toggle-span'>
               <button className={`editor-widget--toggle ${toggle ? '' : 'transform-btn'}`} onClick={() => setToggle(!toggle)}>
                    <ChevronRightIcon className="h-5 w-5 text-white"/>
               </button>
            </span>
        </div>
    )
}