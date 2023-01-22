import "react-color-palette/lib/css/styles.css";
import {useDispatch, useSelector} from 'react-redux'
import { setStageBackground } from "../../app/features/canvas/stageSlice";
import {QueryClient , QueryClientProvider } from 'react-query';
import UnsplashGallery from "../Layout/UnsplashGallery";
import ColorPicker from '../Layout/ColorPicker';

const queryClient = new QueryClient();

export default function Background(){

    const dispatch = useDispatch();

    const {fill} = useSelector(state => state.stage.present.background)

    const pickColor = (hex) => {
        dispatch(setStageBackground({
            type : 'color',
            fill : hex
        }))
    }

    const  handleBgChange = (color) => {
        dispatch(setStageBackground({
            type : 'color',
            fill : color
        }))
    }

    return(
        <div className="p-4 h-screen overflow-hiddden">
            <div className="">
                <div className="colors-list">
                    <ul className="flex flex-row">
                        <li className="colors-list_item mr-1 relative"> 
                            <ColorPicker fill = {fill || '#ffffff'} onChange = {handleBgChange} position = "bottom"/>
                        </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#cfca20]" onClick={() => pickColor('#cfca20')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#d17611]" onClick={() => pickColor('#d17611')}></button> </li>
                        <li className="colors-list_item mr-1"> <button className="h-10 w-10 rounded bg-[#75d66c]" onClick={() => pickColor('#75d66c')}></button> </li>
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