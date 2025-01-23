
import './App.css'
import {useDispatch} from "react-redux"
import authService from './appWrite/auth'
import { login, logOut } from './feature/auth/authSlice'
import Header from './component/header/header'
import Footer from './component/footer/Footer'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
 const [loading,setLoading]=useState(true);
 const dispatch=useDispatch();


 useEffect(()=>{
   authService.currentUser()
   .then((userData)=>{    
    if(userData){
      dispatch(login({userData}))

    } else{
      dispatch(logOut())
    }
   }).finally(()=>{
    setLoading(false)
   })
 
 },[])
  return !loading ?(
    <div className='min-h-screen flex flex-wrap bg-gray-500'>
      <div className='w-full block'>
        <Header/>
           <main>
            <Outlet/>
           </main>
        <Footer/>
      </div>
    </div>
  ):(null)
}

export default App
