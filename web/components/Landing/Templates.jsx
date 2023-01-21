import Button from "./Button";
import Description from "./Description";
import Title from "./Title";
import Image from 'next/image';

export default function Templates(){

    return (
        <div className='w-full text-center relative pt-20'  id = "templates">
            <Title text = "Explore eye-catching templates" style= "text-black" />
            <Description text="Browse through professionally designed templates for social posts, banners, campaigns, and more." />
            <div className='w-full overflow-hidden h-[80vh] flex items-center justify-center my-0 lg:my-20'>
                <div className='flex flex-row items-center w-[2000px] lg:w-[200vw]'  data-scroll data-scroll-speed = "2" data-scroll-direction = "horizontal">
                    <div className='w-[80vw] h-[50vh] lg:h-[70vh] lg:w-[35vw] bg-gray-500 m-5 rounded-lg relative overflow-hidden'>
                        <Image 
                            layout='fill'
                            objectFit='cover'
                            src = '/images/02.webp'
                            alt = 'template image'
                            priority
                        />
                    </div>
                    <div className='w-[80vw] h-[50vh] lg:h-[70vh] lg:w-[35vw] bg-gray-500 m-5 rounded-lg relative overflow-hidden'>
                    <Image 
                            layout='fill'
                            objectFit='cover'
                            src = '/images/01.webp'
                            alt = 'template image'
                            priority
                        />
                    </div>
                    <div className='w-[80vw] h-[50vh] lg:h-[70vh] lg:w-[35vw] bg-gray-500 m-5 rounded-lg relative overflow-hidden'>
                        <Image 
                            layout='fill'
                            objectFit='cover'
                            src = '/images/03.webp'
                            alt = 'template image'
                            priority
                        />
                    </div>
                    <div className='w-[80vw] h-[50vh] lg:h-[70vh] lg:w-[35vw] bg-gray-500 m-5 rounded-lg relative overflow-hidden'>
                    <Image 
                            layout='fill'
                            objectFit='cover'
                            src = '/images/04.webp'
                            alt = 'template image'
                            priority
                        />
                    </div>
                </div>
            </div>
            <Button text= "Create your social graphic now" url = '/editor' style= "mt-10" />
         </div>
    )
}