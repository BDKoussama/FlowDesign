
import Head from 'next/head'
import { BlobLeft , Faq , Templates , Features  , Navbar , Hero , Footer, HeroiIcons} from '../components/Landing/index';
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
                        <Hero   
                            heading= "Design visually appealing social media graphics that set you apart"
                            description = "Easily make unique social media designs in a flash using free templates, images, trending design assets, and more."
                        />
                        <HeroiIcons />
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

