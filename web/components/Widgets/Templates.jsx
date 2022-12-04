import {templates} from '../../utils/templates'
import Image from 'next/image';
import {useDispatch} from 'react-redux';
import { setTemplate } from '../../app/features/canvas/stageSlice';

export default function Templates(){

    const dispatch = useDispatch();

    const updateTemplate = (template) => {
        dispatch(setTemplate({template}))
    }
    
    return(
        <div className="h-screen overflow-y-scroll pb-10 p-4">
            <div className='mt-10 w-full flex flex-wrap'>
                {templates.length !== 0 && templates.map((template , index) => (
                    <button key={index.toString()} onClick = {() => { updateTemplate(template) }} className = "w-[45%] pt-[56.25%] relative m-1  overflow-hidden cursor-pointer">
                        <div className = "">
                            <Image  
                                layout='fill' 
                                objectFit='contain' 
                                className='rounded-lg'
                                loading='lazy' 
                                src = {`/images/templates/${template.thumbnail}`} 
                                alt = "sdsds" 
                            />
                        </div>  
                    </button>
                    
                ))}
            </div>
        </div>
    )
}