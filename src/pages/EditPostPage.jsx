import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appWriteService from "../appWrite/collection.js"
import { Container, PostForm } from "../component";
const EditPostPage=()=>{
    const [post,setPost]=useState([]);
    const {slug}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        if(slug){
            appWriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])
    return post?(
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ):null
}
export default EditPostPage;