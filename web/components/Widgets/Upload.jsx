import { useEffect } from "react";
import { useState } from "react";

export default function Upload(){


    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);


    useEffect(() => {
        console.log(selectedFile)
    } , [selectedFile])

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0])
        setIsFilePicked(true)
    }

    const handleSubmission = () => {

    }


    return(
        <div className="p-4">
            Upload
            <div className="mt-10">
                    <input type="file" name="file" onChange={changeHandler} />

                    {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}

                    <div>
                        <button onClick={handleSubmission}>Submit</button>
                    </div>
		    </div>
        </div>
    )
}