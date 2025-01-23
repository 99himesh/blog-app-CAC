import { useNavigate,Link } from "react-router-dom";
import { login as authLogin } from "../feature/auth/authSlice";
import authService from "../appWrite/auth";
import {Button ,Input} from "./index.js" 
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import { useState } from "react";
import { login } from "../feature/auth/authSlice.js";




const SignUp=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
     const {register,handleSumbit}=useForm();
     const [error,setError]=useState();
     const create=async(data)=>{
        setError("");
        try {
          const userData=  await  authService.createAccount(data);
          if(userData){
            const userData=await authService.currentUser()
            if(userData){
                dispatch(login(userData));
                navigate("/")
            }
          }
        } catch (error) {
            setError(error)
        }

     } 
    return(
        <div className="">
        <form  onSubmit={handleSumbit(create)} className="mt-8">
          <div className="space-y-5">
              <Input
              label={"Full name"}
              placeholder="Enter yor Full name"
              type="text"
              {...register("name",{
                  required:true
              })}
              />
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

export default SignUp;