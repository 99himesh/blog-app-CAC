
import React,{useCallback} from "react";
import { useForm } from "react-hook-form";
import {Button,Input,Select,RTE} from "../index.js";
import authService from "../../appWrite/collection.js";
import appwriteService from "../../appWrite/collection.js"
import { useSelector } from "react-redux";
const PostForm=({post})=>{
    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
        defaultValues:{
            title:post?.title || "",
            slug:post?.slug ||"",
            content:post?.content ||"",
            status:post?.status ||"",
        }
    });

    const navigate=useSavigate();
    const userData=useSelector(state=> state.auth.userData);


    const submit=async (data)=>{
        if(post){
         const file=data.image[0]?appwriteService.uploadFile(data.image[0]):null;
         if(file){
            appwriteService.deleteFile(post.featureImage)
         }
         const  dbPost=await appwriteService.updatePost(post.$id,{...data,featureImage:file?file.$id :undefined})
         if(dbPost){
            navigate(`/post/${dbPost.$id}`)  
         }
        }else{
            const file=await appwriteService.uploadFile(data.image[0]);
            if(file){
                const fileId=file.$id
                data.featureImage=fileId
               const dbPost= await appwriteService.createPost({
                    ...data,
                    userId:userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost/dbPost.$id}`)
                }
            }
        }

    }

    const slugTransForm=useCallback((value)=>{
        if(value && typeof value === 'string'){
            return value
            .trim()
            .toLocaleLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g,'-')
            return ''
        }
    },[]);

    React.useEffect(()=>{
     const subscription=watch(((value,{name})=>{
        if(name === 'title'){
            setValue('slug',slugTransForm(value))
        }

     }))

     return ()=>{
        subscription.unsubscribe()
     }
    },[watch,slugTransForm,setValue])




    return(
       <div>
        <form onSubmit={handleSubmit(submit)}  >
            <div>
                <Input 
                label="Title"
                placeholder="Enter your title"
                className="mb-4"
                {...register("title",{required:true})}
                />
                <Input 
                label="Slug"
                placeholder="Enter your Slug"
                className="mb-4"
                {...register("slug",{required:true})}
                onInput={(e)=>{
                    setValue("slug",slugTransForm(e.currentTarget.value),{
                        shouldValidate:true
                    })
                }}
                />
            <Input
            label="Feature image"
            placeholder="Enter your Feature image"
            className="mb-4"
            type="file"
            accept="image/png,image/jpg,image/jpeg,image/gif"
            {...register("image",{required:!post})}

           />

           {post && (<div className="w-full mb-4">
            <img
            src={appwriteService.getFilepreview(post.featureImage)}
            alt={post.title}
            className="rounded-lg"
            />

           </div>)}
           <Select
            options={["active","inactive"]}
            label={"status"}
            className="mb-4"
            {...register("status",{
                required:true
            })}
           />
           <Button
           type="submit"
           bgColor={post?"bg-green-500":undefined}
           className="w-full"
           >
            {post?"Update":"Submit"}
           </Button>

            </div>

        </form>


        
       </div>
    )
}

export default PostForm;