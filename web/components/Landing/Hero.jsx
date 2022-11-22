import Container from "../Layout/Container";
import Button from "./Button";
import Image from 'next/image';

export default function Hero(){
    return(
        <Container>
            <div className='hero w-full text-center z-2'>
                <h1 className='text-[5.5vw] font-bold mt-0 leading-snug w-10/12 mx-auto'> Create social media graphics that make you stand out </h1>
                <p className='mt-5 w-6/12 mx-auto text-xl'>
                  Easily make unique social media designs in a flash using free templates, images, trending design assets, and more.
                </p>
                <Button text= "Create your social graphic now" url = '/editor' style= "mt-10" />
            </div>
            <div className='w-full mt-20 relative'>
                <Image 
                    layout='responsive'
                    height="70%"
                    width="100%"
                    objectFit='contain'
                    src = '/images/App.png'
                    alt = 'designo app screen'
                />
             </div>
    </Container>
    )
}