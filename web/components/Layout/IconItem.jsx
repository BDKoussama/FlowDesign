import Image from 'next/image';
import Link from 'next/link'
import {useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch , useSelector} from 'react-redux'
import { addShape, setStageBackground } from '../../app/features/canvas/stageSlice';
import {getCrop} from '../../utils/cropImage';

export default function IconItem({photo}){

    const imgRef = useRef();
    
    const dispatch = useDispatch()

    const {height : stageHeight , width : stageWidth} = useSelector(state => state.stage.present.size)
    
    const handleClick = (url) => {
        
        const {height , width}  = imgRef.current.getBoundingClientRect();

        const id = uuidv4()

            const size  = {
                height : photo.size / 2,
                width : photo.size / 2
            }

            const image = new window.Image()

            image.src = url;

            image.onload = () => {

                const crop = getCrop( image , { 
                    height : size.height, 
                    width :  size.width  
                })

                const attrs = {
                    id,
                    url,
                    type: 'Image',
                    x : stageWidth / 2,
                    y :   stageWidth / 2,
                    width : size.width,
                    height : size.height,
                    scaleX: 1,
                    scaleY: 1,
                    offsetX :  size.width / 2,
                    offsetY: size.height / 2,
                    stroke : '#000000',
                    opacity : 1,
                    strokeWidth : 0,
                    blurRadius : 0,
                    brightness: 0,
                    sepia : 0,
                    grayScale : false,
                    shadowColor : '#000000',
                    shadowBlur : 0,
                    shadowOffsetX : 0,
                    shadowOffsetY : 0,
                    rotation : 0 ,
                    visible : true,
                    toggleBlur : false ,
                    ...crop,
                    name : 'object'
                }
    
                dispatch(addShape({
                    className : 'Image',
                    attrs
                }))
            }
    }

    return (
        <div className='gallery-item'>
            <button onClick={() => {handleClick(photo?.formats[0]?.preview_url)}}>
                <div className='w-24 h-32 relative m-1 overflow-hidden rounded cursor-pointer' ref = {imgRef}>
                    <Image layout='fill' objectFit='contain' loading='lazy' src = {photo?.formats[0]?.preview_url} alt = "alt icon"/>
                </div>
            </button>
        </div>
    )
}