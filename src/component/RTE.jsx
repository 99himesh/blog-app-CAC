import React from "react";
import {Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form";
const RTE=({name,control,label,deaultValue=""})=>{
    return(
   <div className="w-full">
    {label && <label>{label}</label>}

    <Controller  
    name={name || "content"}
    control={control}
    render={({field:{onchange}})=>(
        <Editor
        initialValue={deaultValue}
        init={{
            height:500,
            menubar:false,
            plugins:[
                'advlist autolink lists link image'
            ]
        }}
      onEditorChange={onchange}
        />
    )}

    />
   </div>
      
    )
}

export default RTE;