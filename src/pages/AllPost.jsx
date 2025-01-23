
import { useEffect, useState } from "react";
import { PostCard,Container } from "../component";
import appWriteService from "../appWrite/collection.js"
const AllPostPage=()=>{
    const [post,setPost]=useState([]);
    useEffect(()=>{
        appWriteService.getPost([]).then((posts)=>{
            if(posts){
                setPost(posts.documents)

            }
        })

    },[])
    return(
        <div>

            <Container>
                <div className="flex flex-wrap">
                    {post.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard post={post}/>
                        </div>
                    ))}
                </div>
                {post.map}
            </Container>
        </div>
    )
}
export default AllPostPage;