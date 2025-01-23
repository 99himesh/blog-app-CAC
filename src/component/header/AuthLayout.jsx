import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const Protected=({chilren,authentication=true})=>{
    const navigate=useNavigate();
    const [loader,setLoader]=useState();
    const authStatus = useSelector(state => state.auth.status);
    useEffect(()=>{
        if(authentication && authStatus!=authentication){
            navigate("/login")
        } else if(!authentication && authStatus){
            navigate("/")
        }
        setLoader(false);

    },[authStatus,navigate,authentication])
    return loader ? <h1>..Loading</h1> :<>{chilren}</>
}
export default Protected;