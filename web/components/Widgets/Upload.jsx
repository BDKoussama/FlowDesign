import { useState } from "react";
import {Label , FileInput , Alert} from 'flowbite-react';
import { useDispatch } from "react-redux";
import { addItem } from "../../app/features/canvas/uploadSlice";
import { v4 as uuidv4 } from 'uuid';
import UploadsList from "../Layout/uploadsList";

export default function Upload(){

    const [warning , setWarning] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const file = event.target.files[0];

        const fileType  = file.type;

        const validImageTypes = ['image/jpeg', 'image/png'];

        if(validImageTypes.includes(fileType)){
            setWarning(false)

            const reader = new FileReader();
            const id = uuidv4()

            reader.onloadend = () => {
                dispatch(addItem({
                    id,
                    url : reader.result
                }))
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
                        <span>wrong file type , please choose a file of type png , jpeg .</span>
                    </Alert>
                ) }

                <UploadsList />

		    </div>
        </div>
    )
}