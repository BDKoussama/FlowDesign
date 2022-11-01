import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function Widget({toggle , setToggle}){

    return (
        <div className='editor-widget--wrapper' style={{ marginLeft : `${ toggle ? -350  : 0}px` }}   >
            <div  className=''>
               <button className={`editor-widget--toggle ${toggle ? '' : 'transform-btn'}`} onClick={() => setToggle(!toggle)}>
                    <ChevronRightIcon className="h-5 w-5 text-white"/>
               </button>
            </div>
        </div>
    )
}