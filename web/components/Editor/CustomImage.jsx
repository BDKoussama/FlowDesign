import {Image , Transformer} from 'react-konva';
import useImage from 'use-image';
import { Html } from 'react-konva-utils';
import { useEffect, useRef, useState } from 'react';
import {Spinner} from 'flowbite-react';
import {getCrop} from '../../utils/cropImage';
import { useDispatch } from 'react-redux';
import { setDragProps, setTransformProps } from '../../app/features/canvas/selectSlice';

export default function CustomImage({url , attrs , isSelected , onSelect , onSnap}){
    const [image] = useImage(url , "anonymous");
    const imgRef = useRef();
    const spinRef = useRef();
    const trRef = useRef();
    const [isLoading , setIsLoading] = useState(true);

    const dispatch = useDispatch()

    useEffect(() => {
        imgRef.current.cache();
    },[image , attrs])

    useEffect(() => {
      if (isSelected && trRef.current !== null) {
        //trRef.current.rotateAnchorOffset(0);
        // we need to attach transformer manually
        trRef.current.nodes([imgRef.current]);
        trRef.current.getLayer().batchDraw();
      }
  }, [isSelected]);

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


    const onTransform = () => {
      if (imgRef.current !== null) {

        const img = imgRef.current;

        const newWidth = img.width() * img.scaleX();
        const newHeight = img.height() * img.scaleY();
        
        let pos = img.getAttr('lastCropUsed');

        img.setAttr('lastCropUsed', pos);

        const crop = getCrop(
        img.image(),
        { width: img.width(), height: img.height() },
        pos
        );
        imgRef.current.cache();
        img.setAttrs({
          width: newWidth,
          height: newHeight,
          scaleY : 1,
          scaleX: 1,
          ...crop
        });
      }
    }

    const onTransformEnd = () => {

      const size = {
        width: Math.floor(imgRef.current.width()),
        height : Math.floor(imgRef.current.height()),
      }

      const newAttrs = {
        scaleX : imgRef.current.scaleX(),
        scaleY : imgRef.current.scaleY(),
        cropHeight : imgRef.current.cropHeight(),
        cropWidth : imgRef.current.cropWidth(),
        cropX: imgRef.current.cropX(),
        cropY: imgRef.current.cropY(),
      }

      dispatch(setTransformProps({
        size : {
          width: size.width,
          height: size.height
        },
        other : {
          ...newAttrs
        }
      }))
    }

    const onDragEnd = (e) => {

      imgRef.current.name('object');

      const position = {
        x : Math.floor(e.target.x()),
        y: Math.floor(e.target.y())
      }

      dispatch(setDragProps({
        position
      }))

    }


    return(
        <>
            {isLoading ? displaySpinner() : null}
            <Image 
                image={image}
                {...attrs}
                ref = {imgRef}
                onDragEnd = {onDragEnd}
                onTransform = {onTransform}
                onTransformEnd = {onTransformEnd}
                onDragMove = {onSnap}
                onDragStart = {() => {}}
                draggable = {true}
                onClick = {onSelect}
                onTap = {onSelect}
            />
            { isSelected && 
            <Transformer
                ref = {trRef}   
                anchorFill = '#eaf1fe'
                anchorCornerRadius = {50}
                anchorSize={10}
                anchorStroke = '#216ee0'
                borderDash={[3,3]}
                rotateEnabled={false}
                boundBoxFunc={(oldBox, newBox) => {
                    // limit resize
                    if (newBox.width < 100) {
                      return oldBox;
                    }
                    return newBox;
                }}
            /> }
        </>
    )
}