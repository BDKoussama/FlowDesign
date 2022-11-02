
import React from "react"
import dynamic from "next/dynamic";

const Stage = dynamic(() => import("../Editor/StageWrapper"), {
    ssr: false,
  });

export default function Scene({toggle}){
    return (
        <div className='editor-scene--wrapper'>
            <Stage toggle= {toggle}/>
        </div>  
    )   
}