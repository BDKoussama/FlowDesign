import {Button } from 'flowbite-react';
import {useSelector} from 'react-redux';
import LayerControl from '../Layout/LayerControl';

export default function StageHeader(){

    const {item : currentElement} = useSelector(state => state.selected)

    return (
        <div className='stage-header w-full h-[70px] bg-gray-800 absolute top-0 z-10 py-2 px-3'>
            <div className="h-full w-full flex flex-row justify-between items-center">

                {currentElement.id !== null && (<LayerControl />)}

                <div className="download-stage">
                    <Button>
                        Download
                    </Button>
                </div>
            </div>
    </div>
    )
}