import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image';
import { addShape } from "../../app/features/canvas/stageSlice";
import { v4 as uuidv4 } from 'uuid';
import {getCrop} from '../../utils/cropImage';

export default function UploadsList(){

    const dispatch = useDispatch();

    const uploads = useSelector(state => state.uploads)

    const {height : stageHeight , width : stageWidth} = useSelector(state => state.stage.present.size)


    const handleClick = (url) => {

            const id = uuidv4()
            const size  = {
                height :   350,
                width : 350
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
                    x : stageWidth / 2,
                    y : stageHeight / 2,
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
                    grayScale : false,
                    shadowColor : '#000000',
                    shadowBlur : 0,
                    shadowOffsetX : 0,
                    shadowOffsetY : 0,
                    rotation : 0 ,
                    visible : true,
                    toggleBlur : false ,
                    ...crop,
                    name : 'object',
                    title : "Image"
                }
    
                dispatch(addShape({
                    className : 'Image',
                    attrs
                }))
            }
    }

    return(
        <ul className="w-full h-[72vh] 2xl:h-[80vh] border border-white overflow-scroll flex flex-wrap">
            {uploads.length !== 0 && uploads.map((preview) => (
                    <li key = {preview.id} className>
                        <button onClick={() => { handleClick(preview.url)}}>
                            <div className="h-32     w-32 relative">
                                <Image  
                                    layout="fill"
                                    objectFit="cover"
                                    alt = "preview"
                                    src={preview.url}
                                />
                            </div>
                        </button> 
                    </li>
                )) 
            }
        </ul>
    )
}