import { Container, PostForm } from "../component";
import Login from "../component/Login";

const AddPostPage=()=>{
    return(
        <div className="py-8">
          <Container>
            <PostForm/>
          </Container>
        </div>
    )
}
export default AddPostPage;