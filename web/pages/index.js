
import Head from 'next/head'
import { BlobLeft , Faq , Templates , Features  , Navbar , Hero , Footer, HeroiIcons} from '../components/Landing/index';
import  {SmoothScrollProvider} from '../context/SmoothScrollContext';

export default function Home() {

  return (
        <>
            <Head>
                <title>UpDesign | Social media graphics</title>
            </Head>
            <div data-scroll-container className='bg-slate-100'>
                <SmoothScrollProvider>
                    <div className='relative w-full bg-gray-900'>
                        <Navbar/>
                        <Hero   
                            heading= "Design. Inspire. Empower."
                            description = "Unleash your creativity instantly, crafting unique social media designs with ease using free templates, images, trending design assets, and more."
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

