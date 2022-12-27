import { ColorPicker as ColorPickerPallete, useColor } from "react-color-palette";
import { useState , useEffect} from "react";
import useIsMounted from '../../hooks/useIsMounted';
import useClickOutside from '../../hooks/useClickOutside';

export default function ColorPicker({onChange , position , fill}){

    const [color, setColor] = useColor("hex", fill);

    const isMounted = useIsMounted();

    const [toggle , setToggle] = useState(false);

    const ref = useClickOutside(() => { setToggle(false) });


    useEffect(() => {
        if(!isMounted){
            onChange(color.hex)
        }
    },[color])

    return (
        <div className="relative">
                    <div className="w-32 h-full bg-gray-700 border-gray-600 border rounded p-1 flex items-center">
                        <button className= {`h-8 w-8 rounded flex justify-center items-center mr-3`} 
                                onClick={() => setToggle(!toggle)}
                                style = {{ backgroundColor : fill}}
                        >
                        </button>
                        <span className="block text-[11px] text-white">{fill}</span>
                    </div>
 

                    {toggle && (<div ref={ref} className={`color-picker_wrapper absolute ${toggle ? 'show-color-picker' : ''}`} 
                                    style = {{ bottom : position === "top" ?  "100%" : 'unset' , top : position === 'bottom' ? "100%" : "unset" }}>
                                    <ColorPickerPallete width={250} height={100} color={color} alpha = {true} onChange={setColor} hideHSV dark />
                    </div>)}
        </div>
    )
}