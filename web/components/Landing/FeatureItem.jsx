import Image from 'next/image';

export default function FeatureItem({ text , icon }){
    return(
        <div className='opacity-0 rounded-[10px] will-change-tranform translate-y-3/4 feature-item flex-1 mt-10'>
            <div className='text-center flex rounded-[7px] flex-col items-center justify-center h-[300px] py-5 md:py-0 md:mt-0 bg-neutral-900'>
                <div className='h-24 w-24  rounded-full flex justify-center items-center'>
                    <div className='h-20 w-20 relative'>
                        <Image 
                        layout='fill'
                        objectFit='cover'
                        src = {`/images/icons/${icon}.webp`}
                        alt = {`${icon} icon`}
                    />
                    </div>   
                </div>
                <p className='mt-10 text-lg font-normal w-10/12 mx-auto text-gray-400'> {text} </p>
            </div>
        </div>
    )
}