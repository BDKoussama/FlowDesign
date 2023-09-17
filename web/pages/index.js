
import Head from 'next/head'
import { BlobLeft , Faq , Templates , Features  , Navbar , Hero , Footer, HeroiIcons} from '../components/Landing/index';
import  {SmoothScrollProvider} from '../context/SmoothScrollContext';

export default function Home() {

  return (
        <>
            <Head>
                <title>FlowDesign | Social Media Graphics</title>
            </Head>
            <div data-scroll-container className='bg-neutral-900'>
                <SmoothScrollProvider>
                    <div className='relative w-full'>
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

