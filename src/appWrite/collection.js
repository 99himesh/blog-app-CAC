


import config from "../config/config";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";

export class Service{
     client=new Client();
     databases;
     bucket;
     constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
     }
     async createPost({title,slug,content,featureImage,status,userId}){
          try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteColllectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }

            )
          } catch (error) {
            console.log(error)
          }
     }

     async updatePost(slug,{title,content,featureImage,status}){
        try {
           return await this.databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteColllectionId,
            slug,{
                title,
                content,
                featureImage,
                status
            }
           );  
        } catch (error) {
            throw error; 
        }
     }

     async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteColllectionId,
                slug

            )
            return true;
        } catch (error) {
            throw error;
            return false       
        }

     }

     async getPost(slug){
        try {
            return this,this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteColllectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
     }

     async getPosts(query=[Query.equal("status","active")]){
     try {
        return await this.databases.listDocument(
            config.appwriteDatabaseId,
            config.appwriteColllectionId,
            query
        )
     } catch (error) {
        throw error;
     }
     }


     async uploadFile(file){
        try {
            return this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log(error);
             
        }

     }

     async deleteFile(fileId){
        try {
           await   this.bucket.deleteFile(
            config.appwriteBucketId,
            fileId
           )
           return true;
            
        } catch (error) {
            throw error;
            return false;  
        }
     }
     
     async getFilepreview(fileId){
      return this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileId
      )
     }
} 


const service=new Service;
export default service;
