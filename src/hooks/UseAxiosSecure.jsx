import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure =axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true
})

const UseAxiosSecure = () => {
    const {logOut}= UseAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            console.log('error tracked in the interceptor' , error.response)
            if(error.response.status === 401 || error.response.status === 403 ){
                console.log('logout the user');
                logOut()
                .then(()=>{
                    navigate('/login')

                })
                .catch(error => console.log(error))
            }
        })
    })
    return axiosSecure
 
};

export default UseAxiosSecure;