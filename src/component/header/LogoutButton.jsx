import { useDispatch } from "react-redux";
import authService from "../../appWrite/auth";
import { logOut } from "../../feature/auth/authSlice";
const LogoutButton=()=>{
    const dispatch=useDispatch();

    const logOutHandler=()=>{
        authService.logOut().then(()=>{
            dispatch(logOut())
        })
    }

    return(
        <button 
        onClick={()=>{logOutHandler()}}
        >Logout</button>

    )
}

export default LogoutButton;