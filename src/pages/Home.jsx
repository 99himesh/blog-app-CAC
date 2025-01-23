
import { useEffect, useState } from "react"
import appwriteService from "../appWrite/collection.js"
import { Container, PostCard } from "../component";
const Home=()=>{
    const [post,setPost]=useState([]);
    useEffect(()=>{
     appwriteService.getPost().then((posts)=>{
        if(posts){
            setPost(posts.documents)

        }
     })
    },[])
if(post.length===0){
    return(
        <Container>Login to read post</Container>
    )
}
return(
    <div className="w-full py-8">
   <Container>
    <div className="flex flex-wrap">
        {post.map((post)=>(
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post}/>
          </div>
        ))}
    </div>
   </Container>

    </div>
)
}

export default Home;