import { useState , useEffect } from 'react'
import {Rect , Image as BgImage } from 'react-konva'
import useImage from 'use-image';

import {getCrop} from '../../utils/cropImage';

export default function StageBackground({width , height , fill , type , fillPatternImage }){

    //const [image , setImage] = useState(null)

    const [image] = useImage(fillPatternImage , "anonymous");

    const [crop , setCrop] = useState({})

    // wait for image to load before croping
    const onImageLoaded = () => {

        const image = new window.Image()

        //media.crossOrigin = 'anonymous'
        image.src = fillPatternImage;

        image.onload = () => {
            const cropImage = getCrop(image , { height , width })
            setCrop(cropImage);
            //setImage(image)
        }
    }

    // call onImageLoaded when image url changess
    useEffect(() => {
        onImageLoaded()
    },[fillPatternImage])


    //Crop Image Every time we resize the stage
    useEffect(() => {
        if(image){
            const cropImage = getCrop(image , { height , width })
            setCrop(cropImage);
        }
    },[height , width])

    if(type === 'image') {
        return (
            <BgImage 
                draggable = {false}
                url = {fillPatternImage}
                x = {0}
                y = {0}
                width={width}
                height={height}
                image = {image}
                name = 'background'
                {...crop}
            />
        )
    }else {
        return (
            <Rect   
                x = {0}
                y = {0}
                width = {width}
                height = {height}
                fill = {fill}
                name = 'background'
            />
        )
    }
}