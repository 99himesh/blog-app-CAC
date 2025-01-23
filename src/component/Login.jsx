import { useNavigate,Link } from "react-router-dom";
import { login as authLogin } from "../feature/auth/authSlice";
import authService from "../appWrite/auth";
import {Button ,Input} from "./index.js" 
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import { useState } from "react";
const Login=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
     const {register,handleSumbit}=useForm();
     const [error,setError]=useState();
     const login=async(data)=>{
        setError("");
        try {
           const session= await authService.login(data)
           if(session){
             const userData=await authService.currentUser()
             if(userData){
                dispatch(authLogin(userData))
                navigate("/")
             }
           }else{

           }
            
        } catch (error) {
            setError(error.message)
            
        }

     }
    return(
  <div className="">
  <form  onSubmit={handleSumbit(login)} className="mt-8">
    <div className="space-y-5">
        <Input
        label={"Email"}
        placeholder="Enter yor email"
        type="email"
        {...register("email",{
            required:true
        })}
        />
          <Input
        label={"Password"}
        placeholder="Enter yor password"
        type="password"
        {...register("password",{
            required:true
        })}
        />
        <Button type="button" className="w-full">Sign up</Button>
    </div>
       
  </form>


  </div>
    )
}
export default Login;