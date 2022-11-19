
import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Layout/Container';
import Logo from '../components/Svg/Logo';
import Button from '../components/Landing/Button'
import Title from '../components/Landing/Title'
import Description from '../components/Landing/Description';
import Section from '../components/Landing/Section';
import BlobLeft from '../components/Landing/BlobLeft';
import BlobRight from '../components/Landing/BlobRight';

export default function Home() {
  
  return (
        <>
                <Head>
                    <title>Home Page</title>
                </Head>


                <div className='relative w-full '>
                    <div className='absolute -left-50'>
                        <BlobLeft />
                    </div>
                    <Container>
                        <div className='py-10 z-2'>
                            <nav className='flex items-center justify-between'>
                                <span className='logo flex justify-center items-center h-12 w-12'> 
                                  <Logo />
                                </span>

                                <Button text= "Get Started" url = '/editor' />
                            </nav>
                        </div>
                    </Container>
                    <Container>
                          <div className='hero w-full text-center'>
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
                                  src = '/images/APP.webp'
                                  alt = 'designo app screen'
                              />
                          </div>
                  </Container>
                </div>

                  

                    <div className='w-full text-center pt-20 relative border border-black '>

                        <div className='absolute right-0 top-0 z-0'>
                            <BlobRight />
                        </div>

                        <Title text = "Explore eye-catching templates" />
                        <Description text="Browse through thousands of professionally designed templates for social posts, banners, campaigns, and more. Specify your search based on platform, aesthetic, mood, color, event, or theme." />
                        <div className='w-full overflow-hidden h-[80vh] flex items-center justify-center my-20'>
                            <div className='flex flex-row items-center w-[200vw]'>
                                <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg'></div>
                                <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg'></div>
                                <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg'></div>
                                <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg'></div>
                            </div>
                        </div>
                        <Button text= "Create your social graphic now" url = '/editor' style= "mt-10" />
                    </div>

                  <Container>
                      <div className='w-full text-center mt-60 relative '>
                          <Title text = "We didin't reinvent the wheel" />
                          <Description text="Just Launch Designo for free on your desktop or mobile device to start creating your graphic" />
                          <div className='w-full flex justify-between items-center mt-20  p-5'>

                              <div className='text-center flex flex-col items-center flex-1'>
                                  <div className='h-24 w-24 bg-gray-200 rounded-full'></div>
                                  <p className='mt-10 text-xl font-medium w-10/12 mx-auto'> Social media templates that are easy to adjust </p>
                              </div>

                              <div className='text-center flex flex-col items-center flex-1'>
                                  <div className='h-24 w-24 bg-gray-200 rounded-full'></div>
                                  <p className='mt-10 text-xl font-medium w-10/12 mx-auto'> Upload your own images and brand colorsand create engaging social media posts </p>
                              </div>

                              <div className='text-center flex flex-col items-center flex-1'>
                                  <div className='h-24 w-24 bg-gray-200 rounded-full'></div>
                                  <p className='mt-10 text-xl font-medium w-10/12 mx-auto'> High-quality stock photos and other amazing design elements</p>
                              </div>
                          </div>
                      </div>

                      <Section 
                        title= "Select from professionally designed social media templates "
                        subtitle = "get started fast"
                        description= "Browse through thousands of professionally designed templates for social posts, banners, campaigns, and more. Specify your search based on platform, aesthetic, mood, color, event, or theme."
                        direction= "flex-row-reverse"
                        style= "mr-28"
                      />


                      <Section 
                        title= "Customize your social graphic templates with a few clicks"
                        subtitle = "easy-to-use interface"
                        description= "Easily modify your design for any of your social platforms. Drag & drop different shapes , images and text"
                        direction= "flex-row"
                        style= "ml-10"
                      />

                      <Section 
                        title= "Search across any keyword and select from photos , stickers and icons"
                        subtitle = "FULLY CUSTOMIZABLE"
                        description= "An extensive collection of high-resolution photos to help marketers spice up their social graphics and create images that bring lifee to their social media presence."
                        direction= "flex-row-reverse"
                        style= "mr-28"
                      />

                      <Section 
                        title= "Save and share your social media graphics"
                        subtitle = "ONE CLICK AWAY FROM THE WORLD"
                        description= "Instantly download your finished product to your device and you’re ready to share.  Keep your branding consistent across future social graphic designs by duplicating your design and updating the content."
                        direction= "flex-row"
                        style= "ml-10"
                      />

                      <div className='my-60 text-center'>
                          <Title text="Frequently asked questions" />
                      </div>
                  </Container>
                
        </>
  )
}

