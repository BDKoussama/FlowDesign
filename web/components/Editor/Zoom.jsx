import { MagnifyingGlassPlusIcon , MagnifyingGlassMinusIcon } from '@heroicons/react/24/outline'


export default function Zoom({zoomIn , zoomOut}){
    return (
        <div className='zoom-control'>
                <button className='zoom-control--btn' onClick={() => zoomIn()}>
                    <MagnifyingGlassPlusIcon className="h-5 w-5 text-white"/>
                </button>

                <button className='zoom-control--btn' onClick={() => zoomOut()}>
                    <MagnifyingGlassMinusIcon className="h-5 w-5 text-white"/>
                </button>
        </div>
    )
}