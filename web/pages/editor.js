import Head from 'next/head'
import { useState } from 'react'
import SideBar from '../components/Editor/SideBar';
import Widget  from '../components/Editor/Widget';
import Scene from '../components/Scene';

export default function Editor() {

  const [toggle , setToggle] = useState(false);
  
  return (
        <>
          <Head>
              <title>Editor App</title>
          </Head>
          <div  className='editor'>
              <SideBar />
              <Widget toggle = {toggle} setToggle = {setToggle} />
              <Scene toggle = {toggle}/>
          </div>     
        </>
  )
}

