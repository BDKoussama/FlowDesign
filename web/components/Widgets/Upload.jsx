import { useState } from "react";
import Image from 'next/image';
import {Label , FileInput , Alert} from 'flowbite-react';

export default function Upload(){

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [warning , setWarning] = useState(false);

    const handleChange = (event) => {
        const file = event.target.files[0];

        const fileType  = file.type;

        const validImageTypes = ['image/jpeg', 'image/png'];

        if(validImageTypes.includes(fileType)){
            setWarning(false)
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
            setPreview(reader.result);
            };

            if(file){
                reader.readAsDataURL(file);
            }
        }else{
            console.log("wrong file type");
            setWarning(true);
        }
    };
    
    return(
        <div className="p-4">
            <div className="mt-10">
                <div className="mb-10">
                    <div className="mb-2 block">
                        <Label htmlFor="file" value="Upload file"/>
                    </div>
                    <FileInput id="file" onChange={handleChange} accept="image/*"/>
                </div>
                { warning && (
                    <Alert className="mb-5" color="failure" onDismiss = { () => { setWarning(false) } }>
                        <span>wrong file type , please choose a file of type Png , jpeg .</span>
                    </Alert>
                ) }
                {preview && (
                    <button onClick={() => { console.log(preview)}}>
                        <div className="h-28 w-28 relative">
                            <Image  
                                layout="fill"
                                objectFit="cover"
                                alt = "preview"
                                src={preview}
                            />
                        </div>
                    </button>)}
		    </div>
        </div>
    )
}