import { MagnifyingGlassPlusIcon , MagnifyingGlassMinusIcon } from '@heroicons/react/24/outline'


export default function Zoom({scale , zoom}){
    return (
        <div className='zoom-control bg-gray-800'>
                <button className='zoom-control--btn' onClick={() => zoom('in')} disabled = { scale >= 0.99 }>
                    <MagnifyingGlassPlusIcon className="h-5 w-5" color= { scale >= 0.99 ? '#313f45' : '#fff' }/>
                </button>
                <p className='text-sm text-white block w-10 text-center'> {`${scale.toFixed(1) * 100}%`} </p>
                <button className='zoom-control--btn' onClick={() => zoom('out')}  disabled = { scale <= 0.3 }>
                    <MagnifyingGlassMinusIcon className="h-5 w-5" color= { scale <= 0.3 ? '#313f45' : '#fff' } />
                </button>
        </div>
    )
}