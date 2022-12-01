
import React from "react"
import dynamic from "next/dynamic";
import StageHeader from "../Editor/StageHeader";
import { useRef } from "react";
import { useEffect } from "react";

const Stage = dynamic(() => import("../Editor/StageWrapper"), {
    ssr: false,
  });

export default function Scene({toggle}){

    const stageRef = useRef();

    const downloadAsPng = (width , height) => {
        if(stageRef.current && stageRef.current !== null){
            const stage = stageRef.current;
            stage.width(width)
            stage.height(height)
            stage.scaleX(1)
            stage.scaleY(1)
            const uri = stageRef.current.toDataURL();
            const link = document.createElement('a');
            link.download = name;
            link.href = uri;
            link.click();
        }
        
    }

    const downloadAsJson = (width , height) => {
        if(stageRef.current && stageRef.current !== null){
          const stage = stageRef.current;
          stage.width(width)
          stage.height(height)
          stage.scaleX(1)
          stage.scaleY(1)
          const json = stage.toJSON();
          const fileData = JSON.stringify(json);
          const blob = new Blob([fileData], {type: "text/plain"});
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `test.json`;
          link.href = url;
          link.click();
        }
    }

    return (
        <div className='editor-scene--wrapper p-[5px] bg-[#dfdede] md:p-0 h-[90vh] md:h-[100%] md:flex-1 md:grow '>
            <StageHeader downloadAsJson = {downloadAsJson} downloadAsPng = {downloadAsPng} />
            <Stage toggle= {toggle} stageRef = {stageRef}/>
        </div>  
    )   
}