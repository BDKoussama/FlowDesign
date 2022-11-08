import { ColorPicker as ColorPickerPallete, useColor } from "react-color-palette";
import { PaintBrushIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

export default function ColorPicker({fill , setFill}){

    const [color, setColor] = useColor("hex", "#121212");

    const [toggle , setToggle] = useState(false);

    useColor(() => {
        setFill(color.hex)
    },[color])

    return (
        <div className="relative">
                    <div className="w-28 h-full bg-white rounded p-1 flex items-center">
                        <button className= {`h-8 w-8 rounded flex justify-center items-center mr-2`} 
                                onClick={() => setToggle(!toggle)}
                                style = {{ backgroundColor : color.hex}}
                        >
                        </button>
                        <span className="text-black block">{color.hex}</span>
                    </div>
 

                    {toggle && (<div className={`color-picker_wrapper absolute top-[100%] ${toggle ? 'show-color-picker' : ''}`}>
                        <ColorPickerPallete width={200} height={100} color={color} onChange={setColor} hideHSV dark />
                    </div>)}
        </div>
    )
}