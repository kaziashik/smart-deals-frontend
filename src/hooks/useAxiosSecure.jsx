import axios from "axios"
import useAuth from "./useAuth"
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance=axios.create({
    baseURL: 'https://smart-deals-server-ecru.vercel.app'
})
const useAxiosSecure= ()=>{
    const {user,logOut}=useAuth();
    const navigate=useNavigate()
    //set token in the header for all the api call using axiosSecure hook

    //request interceptor
    useEffect(()=>{
        const requestInterceptor=instance.interceptors.request.use((config)=>{
        config.headers.Authorization=`Bearer ${user.accessToken} `
        return config;
    })

    // response interceptor
    const responseinterceptor=instance.interceptors.response.use(res=>{
        return res;
    },err=>{
        const status =err.status
        if(status==401 || status ==403){
            logOut()
            .then(()=>{
                navigate('/register')
            })
            
        }
    })
    
    return  ()=>{
        instance.interceptors.request.eject(requestInterceptor)
        instance.interceptors.response.eject(responseinterceptor)
    }
    },[user])
    return instance;

}

export default useAxiosSecure;