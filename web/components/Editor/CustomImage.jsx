import {Image} from 'react-konva';
import useImage from 'use-image';
import { Html } from 'react-konva-utils';
import { useEffect, useRef, useState } from 'react';
import {Spinner} from 'flowbite-react';

export default function CustomImage({url , attrs }){
    const [image] = useImage(url , "anonymous");
    const imgRef = useRef();
    const spinRef = useRef();
    const [isLoading , setIsLoading] = useState(false);

    useEffect(() => {
        imgRef.current.cache();
    },[image , attrs])

    const displaySpinner = () => {
        if(imgRef.current && imgRef.current !== null) {
        
            var imgPosition = imgRef.current.getAbsolutePosition();
    
            var areaPosition = {
              x:  imgPosition.x,
              y: imgPosition.y,
            };
            
            const media = new window.Image()
    
            media.crossOrigin = 'anonymous'
            media.src = url
    
            media.onload = _ => {
              setIsLoading(false)
            }
    
            return (
              <Html
                  divProps={{
                      style: {
                        position : 'absolute' ,
                        top : `${areaPosition.y}px`,
                        left : `${areaPosition.x}px`,
                      },
                    }}
                  >
                    <div className=' border-2 border-[#1b6de7] flex items-center justify-center bg-[#172025]' 
                      ref={spinRef} 
                      style={{ 
                        width : imgRef.current.width(),
                        height : imgRef.current.height(),
                      }}>
                        <div className='flex items-center justify-center p-3'>
                            <Spinner aria-label="Default status example" />
                        </div>
                  </div>
                </Html>      
            )
        }
    }

    return(
        <>
            {isLoading ? displaySpinner() : null}
            <Image 
                image={image}
                {...attrs}
                ref = {imgRef}
                onDragEnd = {() => {}}
                onDragMove = {() => {}}
                onDragStart = {() => {}}
                draggable = {true}
            />
        </>
    )
}