


import config from "../config/config";
import { Client, Account, ID } from "appwrite";
export class AuthService{
     client=new Client();
     account;
     constructor(){
        this.client
        .setEndpoint(config?.appwriteUrl)
        .setProject(config?.appwriteProjectId);
        this.account=new Account(this.client);

     }


     async createAccount({email,password,name}){
        try{
       const userAccounnt=await this.account.create(ID.unique(),email,password,name);
       if(userAccounnt){
          this.login({email,password})
       }else{
        return userAccounnt;
       }
        }catch(err){
            throw err;

        }

     }

     async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
            throw error;
        }
        
     }

   async currentUser(){
    try {
        return await this.account.get();
       
    } catch (error) {
        console.log(error) ;
    }
   }

   async logOut(){
    try {
        return this.account.deleteSessions()
        
    } catch (error) {
        throw error;
        
    }
   }



    };




const authService=new AuthService()

export default authService;