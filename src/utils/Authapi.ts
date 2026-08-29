

import axios from 'axios'
import React from 'react'


const api =  axios.create(
    {
        baseURL:   "http://localhost:5000/users",
        withCredentials:true
    }
    
)

 interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface ApiResponse<T>{

    message?:string,
    success?:boolean,
    error?:string,
    user?:T

}





export const registerUser = async (
     name: string,
  email: string,
  password: string
): Promise<User | null> => {
    try {
        const res = await api.post<ApiResponse<User>>("/register",{
             name,
              email,
             password,
        })

        return res.data.user || null;  
    } catch (error: any) {
        console.error("Register error:" , error.response?.data)

        throw new Error(
         error.response?.data?.message ||
        error.response?.data?.error ||
        "Registration failed"
    );
    }
}





export const loginUser = async (
   
  email: string,
  password: string
): Promise<User | null> => {
    try {
        const res = await api.post<ApiResponse<User>>("/login",{
             
              email,
             password,
        })

        return res.data.user || null;  
    } catch (error: any) {
        console.error("Register error:" , error.response?.data)

        throw new Error(
         error.response?.data?.message ||
        error.response?.data?.error ||
        "Login failed"
    );
    }
}




export const logoutUser = async (): Promise<void> => {
    try {
        const res = await api.post("/logout")

        return res.data.user || null;  
    } catch (error: any) {
        console.error("logout error:" , error.response?.data)

         throw new Error("Logout failed");
    }
}







export const getCurrentUser = async (
  
): Promise<User | null> => {
    try {
        const res = await api.get<ApiResponse<User>>("/me",{
            
        })

        return res.data.user || null;  
    } catch (error: any) {
       return null;
    }
}




