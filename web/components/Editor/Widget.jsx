import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react';
import { useContext } from 'react'
import { WidgetContext } from '../../context/WidgetContext';
import {Templates , TextWidget , Photos , Elements , Upload , Background , Layers , Resize } from '../Widgets/index';

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
            default: 
                return <Templates/>
        }
    }

    return (
        <div className='editor-widget--wrapper' style={{ marginLeft : `${ toggle ? -350  : 0}px` }}>
            <div className='editor-widget--content p-6 text-white'>
                {handleRender()}
            </div>
            <span>
               <button className={`editor-widget--toggle ${toggle ? '' : 'transform-btn'}`} onClick={() => setToggle(!toggle)}>
                    <ChevronRightIcon className="h-5 w-5 text-white"/>
               </button>
            </span>
        </div>
    )
}