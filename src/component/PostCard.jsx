
import service from "../appWrite/collection";
import { Link } from "react-router-dom";
const PostCard=({$id,title,featureImage })=>{
    
    return(
        <Link to={`/post/${id}`}>
<div className="w-full bg-gray-100 rounded-xl p-4">
    <div className="w-full justify-center mb-4">
   <img src={service.getFilepreview(featureImage)} alt="title"
   />
   <h2 className="text-xl font-bold">{title}</h2>

    </div>
</div>

        </Link>
    )
}

export default PostCard;