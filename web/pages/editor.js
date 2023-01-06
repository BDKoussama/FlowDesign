import Head from 'next/head'
import { useState } from 'react'
import SideBar from '../components/Editor/SideBar';
import Widget  from '../components/Editor/Widget';
import Scene from '../components/Scene';
import WidgetContextProvider from '../context/WidgetContext';



export default function Editor() {  

  const [toggle , setToggle] = useState(false);
  
  return (
    <>
          <Head>
              <title>Editor App</title>
          </Head>

          <div  className='editor flex flex-col-reverse md:flex-row h-[100%] md:h-[100vh]'>
              <WidgetContextProvider>
                  <SideBar />
                  <Widget toggle = {toggle} setToggle = {setToggle} />
              </WidgetContextProvider>
              <Scene toggle = {toggle}/> 
          </div>     
    </>
  )
}

