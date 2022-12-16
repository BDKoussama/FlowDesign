
import React from "react"
import dynamic from "next/dynamic";
import StageHeader from "../Editor/StageHeader";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { setStageSize } from "../../app/features/canvas/stageSlice";

const Stage = dynamic(() => import("../Editor/StageWrapper"), {
    ssr: false,
  });

export default function Scene({toggle}){

    const stageRef = useRef();
    const dispatch = useDispatch();

    const scaleStage = (width , height) => {
        const stage = stageRef.current;
        stage.width(width)
        stage.height(height)
        stage.scaleX(1)
        stage.scaleY(1)
        dispatch(setStageSize({
            height,
            width,
            initialWidth : width ,
            initialHeight : height ,
            scale : {
                x : 1 ,
                y : 1
            }
        }))
    }

    const downloadAsPng = ({width , height}) => {
        const id = uuidv4()

        if(stageRef.current && stageRef.current !== null){
            scaleStage(width , height)
            const uri = stageRef.current.toDataURL();
            const link = document.createElement('a');
            link.download = `${id}.png`;
            link.href = uri;
            link.click();
        }
        
    }

    const downloadAsJson = (size) => {
        const id = uuidv4()
        if(stageRef.current && stageRef.current !== null){

          scaleStage(size.width , size.height)
          
          const fileData = stageRef.current.toJSON();
          const obj = JSON.parse(fileData);
          const data = {
            thumbnail : "01.png",
            ...obj,
            attrs : {
                ...obj.attrs,
                ...size
             },
          }
          const blob = new Blob([JSON.stringify(data)], {type: "application/json"});
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `${id}.json`;
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