
import Head from 'next/head'
import Image from 'next/image';
import { BlobLeft , Faq , Templates , Features  , Navbar , Hero , Footer} from '../components/Landing/index';
import  {SmoothScrollProvider} from '../context/SmoothScrollContext';

export default function Home() {
    
  return (
        <>
                <Head>
                    <title>Design.Io | Social media graphics</title>
                </Head>
                
            
            <div data-scroll-container>
            <SmoothScrollProvider>
                <div className='relative w-full'>

                    <div className='absolute -left-50 -z-10 hidden'>
                        <BlobLeft />
                    </div>

                    <Navbar/>

                    <Hero/>

                    <div className='h-16 w-16 md:h-20 md:w-20 absolute top-20 md:top-40 left-16 md:left-32' data-scroll data-scroll-speed = "-1.5">
                        <div className='h-full w-full relative'>
                            <Image src="/images/icons/facebook.png" alt = "facebook icon" layout='fill' priority/>
                        </div>
                    </div>

                    <div className='h-16 w-16 md:h-20 md:w-20 absolute top-[35%] right-[8%] md:top-[25%] md:right-[20%]'>
                        <div className='h-full w-full relative'>
                            <Image src="/images/icons/instagram-logo.png" alt = "Instagram icon" layout='fill' priority/>
                        </div>
                    </div>

                    <div className='h-12 w-12 md:h-16 md:w-16 absolute top-40 right-8   md:top-40 md:right-32'>
                        <div className='h-full w-full relative'>
                            <Image src="/images/icons/twitter.png" alt = "Twitter icon" layout='fill' priority/>
                        </div>
                    </div>

                    <div className='h-12 w-12 md:h-16 md:w-16 absolute top-[35%] left-12 md:top-[28%] md:left-72 ' >
                        <div className='h-full w-full relative'>
                            <Image src="/images/icons/youtube-logo.png" alt = "youtube icon" layout='fill' priority/>
                        </div>
                    </div>

                </div>

                  
                <Templates />
                <Features />
                <Faq/>
                <Footer />
                  
                
                </SmoothScrollProvider>
            </div>
                
        </>
  )
}

