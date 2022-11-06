import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { PaintBrushIcon } from '@heroicons/react/24/outline'
import { useState , useRef} from "react";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { setStageBackground } from "../../app/features/canvas/stageSlice";
import {QueryClient , QueryClientProvider } from 'react-query';
import UnsplashGallery from "../Layout/UnsplashGallery";


const queryClient = new QueryClient();

const useIsMounted = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    },[])

    return isMountRef.current
}

export default function Background(){

    const dispatch = useDispatch();

    const isMounted = useIsMounted();

    const [color, setColor] = useColor("hex", "#121212");

    const [value , setValue] = useState("");

    const [toggle , setToggle] = useState(false);

    const pickColor = (hex) => {
        setToggle(false)
        setValue(hex)
    }

    useEffect(() =>{
        if(!isMounted){
            setValue(color.hex)
        }
    },[color])

    useEffect(() => {
        if(!isMounted){
            dispatch(setStageBackground({
                type : 'color',
                fill : value
            }))
        }
    },[value])


    


    return(
        <div>
            <h3>Backgrounds</h3>
            <div className="mt-10">
                <div className="colors-list">
                    <ul className="flex flex-row">
                        <li className="colors-list_item mr-1 relative"> 
                            <button className="h-10 w-10 rounded bg-[#394757] flex justify-center items-center" onClick={() => setToggle(!toggle)}>
                                <PaintBrushIcon className="h-5 w-5" color="#fff"/>
                            </button> 

                            {toggle && (<div className={`color-picker_wrapper absolute top-[100%] ${toggle ? 'show-color-picker' : ''}`}>
                                <ColorPicker width={200} height={100} color={color} onChange={setColor} hideHSV dark />
                            </div>)}

                        </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#cfca20]" onClick={() => pickColor('#cfca20')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#d17611]" onClick={() => pickColor('#d17611')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#75d66c]" onClick={() => pickColor('#75d66c')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#43ab97]" onClick={() => pickColor('#43ab97')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#4055a6]" onClick={() => pickColor('#4055a6')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#b060b8]" onClick={() => pickColor('#b060b8')}></button> </li>
                    </ul>
                </div>

                
                <QueryClientProvider client={queryClient}>
                    <UnsplashGallery widget = "background"/>
                </QueryClientProvider>
                
            </div>
        </div>
    )
}