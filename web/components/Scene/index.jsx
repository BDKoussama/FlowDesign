
import React from "react"
import dynamic from "next/dynamic";
import StageHeader from "../Editor/StageHeader";

const Stage = dynamic(() => import("../Editor/StageWrapper"), {
    ssr: false,
  });

export default function Scene({toggle}){

    return (
        <div className='editor-scene--wrapper'>
            <StageHeader />
            <Stage toggle= {toggle}/>
        </div>  
    )   
}