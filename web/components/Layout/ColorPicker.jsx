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
                    <button className= {`h-10 w-10 rounded flex justify-center items-center`} 
                            onClick={() => setToggle(!toggle)}
                            style = {{ backgroundColor : color.hex}}
                    >
                        <PaintBrushIcon className="h-5 w-5" color="#fff"/>
                    </button> 

                    {toggle && (<div className={`color-picker_wrapper absolute top-[100%] ${toggle ? 'show-color-picker' : ''}`}>
                        <ColorPickerPallete width={200} height={100} color={color} onChange={setColor} hideHSV dark />
                    </div>)}
        </div>
    )
}