import Image from 'next/image';

export default function FeatureItem({ text , icon }){
    return(
        <div className='text-center flex flex-col items-center flex-1 mt-10 md:mt-0 opacity-0 will-change-tranform translate-y-3/4 feature-item'>
            <div className='h-24 w-24 bg-gray-200 rounded-full flex justify-center items-center'>
                <div className='h-16 w-16 relative'>
                    <Image 
                       layout='fill'
                       objectFit='cover'
                       src = {`/images/icons/${icon}.webp`}
                       alt = {`${icon} icon`}
                   />
                </div>   
            </div>
            <p className='mt-10 text-lg font-medium w-10/12 mx-auto'> {text} </p>
        </div>
    )
}