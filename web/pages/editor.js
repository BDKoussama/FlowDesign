import Head from 'next/head'
import { useState } from 'react'
import SideBar from '../components/Editor/SideBar';
import Widget  from '../components/Editor/Widget';
import Scene from '../components/Scene';
import WidgetContextProvider from '../context/WidgetContext';
import {isMobile} from 'react-device-detect';
import {Button} from '../components/Landing/index';


export default function Editor() {  

  const [toggle , setToggle] = useState(false);
  
  return (
    <>
          <Head>
              <title>Editor App</title>
          </Head>
          {isMobile ? (
            <div className='h-screen w-full p-4 flex flex-col justify-center items-center'>
                <p className='text-center mb-2'> Oops! For better experience use desktop navigator , the mobile version is stil under construction </p>
                <div>
                  <Button text= "Go Back" animate = {false} style = "mt-10"/>
                </div>
            </div>
          ) : (
            <div  className='editor flex flex-col-reverse md:flex-row h-[100%] md:h-[100vh]'>
                <WidgetContextProvider>
                    <SideBar />
                    <Widget toggle = {toggle} setToggle = {setToggle} />
                </WidgetContextProvider>
                <Scene toggle = {toggle}/> 
            </div>
          )}      
    </>
  )
}

