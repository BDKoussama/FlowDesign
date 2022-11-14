import Image from 'next/image';
import Link from 'next/link'
import {useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'
import { addShape, setStageBackground } from '../../app/features/canvas/stageSlice';
import {getCrop} from '../../utils/cropImage';

export default function GalleryItem({photo , widget}){

    const imgRef = useRef();
    
    const dispatch = useDispatch()

    const handleClick = (url) => {

        const {height , width}  = imgRef.current.getBoundingClientRect();

        const id = uuidv4()

        if(widget === "photos"){

            const size  = {
                height : height + 100,
                width : width + 100
            }

            const image = new window.Image()

            image.src = url;

            image.onload = () => {

                const crop = getCrop( image , { 
                    height : size.height, 
                    width : size.width 
                })

                const attrs = {
                    id,
                    url,
                    type: 'Image',
                    x : 150,
                    y : 150,
                    width : size.width,
                    height : size.height,
                    scaleX: 1,
                    scaleY: 1,
                    offsetX : size.width / 2,
                    offsetY: size.height / 2,
                    stroke : '#000000',
                    opacity : 1,
                    strokeWidth : 0,
                    blurRadius : 0,
                    brightness: 0,
                    sepia : 0,
                    shadowColor : '#000000',
                    shadowBlur : 0,
                    shadowOffsetX : 0,
                    shadowOffsetY : 0,
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

        }else{
            // dispatch setStageBackground
            dispatch(setStageBackground({
                type : 'image',
                fillPatternImage : url
            }))
        }
    }

    return (
        <div className='gallery-item'>
            <button onClick={() => {handleClick(photo?.urls?.regular)}}>
                <div className='w-24 h-32 relative m-1 overflow-hidden rounded cursor-pointer' ref = {imgRef}>
                    <Image layout='fill' objectFit='cover' loading='lazy' src = {photo.urls.small} alt = {photo.alt_description}/>
                    <div className="gallery-item_overlay absolute top-0 h-full w-full flex items-end before:content[''] before:opacity-50 before:w-full before:h-full before:block before:bg-black before:absolute">
                        <p className='text-[11px] p-0.5 text-center z-[1]'>
                            <span className='inline-block mx-0.5'>Photo by</span>
                            <span className='inline-block mx-0.5 text-[#7dd5f0]'>
                                <Link href = {photo?.user?.links?.html} >
                                    <a target="_blank">
                                        {photo?.user?.first_name}
                                    </a>
                                </Link>
                            </span>
                            <span className='inline-block mx-0.5'>on</span>
                            <span className='inline-block mx-0.5 text-[#7dd5f0]'>
                                <Link href="https://unsplash.com/" >
                                    <a target="_blank">
                                        Unsplash
                                    </a>
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </button>
        </div>
    )
}