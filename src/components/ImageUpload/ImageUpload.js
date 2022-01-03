import React, {useRef,useState, useEffect} from "react";

import"./ImageUpload.css";

const ImageUpload=(props)=>{
    const[previewUrl,setPreciewUrl]=useState();
    const[isValid, SetIsValid]=useState(false);

    const filePickerRef=useRef();

    useEffect(()=>{
        if(!props.file){return;
    }
    const fileReader= new FileReader();
    fileReader.onload=()=>{
        setPreciewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(props.file);
},[props.file])

    const pickedHandler=(event)=>{
        let pickedFile;
        if(event.target.files&&event.target.files.length===1){
            pickedFile=event.target.files[0];
            props.setFile(pickedFile);
            SetIsValid(true);
        }
        else {SetIsValid(false);}
    }

    const pickImageHandler=()=>{
        filePickerRef.current.click();
    };

    return(
        <div classname="form-control">
            <input
            id={props._Id}
            ref={filePickerRef}
            style={{display:"none"}}
            type="file"
            accept=".jpg,.png,.jpeg"
            onchange={pickedHandler}
            />
            <div className={`image-upload ${props.center&&"center"}`}>
            </div>
            {!isValid&&<p>{props.errorText}</p>}
        </div>
    )

};

export default ImageUpload;
