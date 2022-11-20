
import React from "react"
import dynamic from "next/dynamic";
import StageHeader from "../Editor/StageHeader";

const Stage = dynamic(() => import("../Editor/StageWrapper"), {
    ssr: false,
  });

export default function Scene({toggle}){

    return (
        <div className='editor-scene--wrapper p-[5px] bg-[#dfdede] md:p-0 h-[90vh] md:h-[100%] md:flex-1 md:grow '>
            <StageHeader />
            <Stage toggle= {toggle}/>
        </div>  
    )   
}