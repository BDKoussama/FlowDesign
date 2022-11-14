import {Image , Transformer} from 'react-konva';
import useImage from 'use-image';
import { Html } from 'react-konva-utils';
import { useEffect, useRef, useState } from 'react';
import {Spinner} from 'flowbite-react';
import {getCrop} from '../../utils/cropImage';
import { useDispatch } from 'react-redux';
import { setDragProps, setTransformProps } from '../../app/features/canvas/selectSlice';
import { updateElement } from '../../app/features/canvas/stageSlice';

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
              x:  attrs.x - (attrs.width / 2 ),
              y: attrs.y - (attrs.height / 2)
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
          width: Math.abs(newWidth),
          height: Math.abs(newHeight),
          offsetX : Math.abs(newWidth / 2),
          offsetY : Math.abs(newHeight / 2) ,
          scaleY : imgRef.current.scaleY() < 0 ? -1 : 1,
          scaleX: imgRef.current.scaleX() < 0 ? -1 : 1,
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
        scaleY : imgRef.current.scaleY() ,
        scaleX: imgRef.current.scaleX() ,
        cropHeight : imgRef.current.cropHeight(),
        cropWidth : imgRef.current.cropWidth(),
        cropX: imgRef.current.cropX(),
        cropY: imgRef.current.cropY(),
        offsetX : imgRef.current.offsetX(),
        offsetY : imgRef.current.offsetY(),
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

      if(isSelected){
        dispatch(setDragProps({
            position
        }))
    }else{
        dispatch(updateElement({
            id : attrs.id,
            attrs : {
                x : position.x,
                y : position.y,
            }
        }))
    }

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
                  const newTooSmall = newBox.width < 1 || newBox.height < 1;
                  const oldTooSmall = oldBox.width < 1 || oldBox.height < 1;
                  if (newTooSmall && !oldTooSmall) {
                    return oldBox;
                  }
                  return newBox;
                }}
            /> }
        </>
    )
}