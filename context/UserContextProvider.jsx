import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest } from "../apiConnector";

export const userContext = createContext()

const UserContextProvider = ({children}) => {
    const token = document.cookie.replace("token=","");
    const [logUser,setLogUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getUser = async()=>{
        if(token) {
            const response = await getRequest("http://localhost:8000/api/users/getUser",token)
            setLogUser(response.data.success);
        }
        setIsLoading(false); 
    }
    useEffect(()=>{
        getUser()
    },[token])

    const [signupUser,setSignupUser] = useState({
        email:"",
        username:"",
        password:""
    })

    const [loginUser,setLoginUser] = useState({
        username:"",
        password:""
    })

    const updateUsername = useCallback((value)=>{
        setSignupUser((prev)=>({
            ...prev,username:value
        }));
    },[])

    const updateEmail = useCallback((value)=>{
        setSignupUser((prev)=>({...prev,email:value}))
    },[])

    const updatePassword = useCallback((value)=>{
        setSignupUser((prev)=>({...prev,password:value}))
    },[])

    const updateLoginUser = useCallback((value)=>{
        setLoginUser((prev)=>({...prev,username:value}))
    },[])

    const updateLoginPassword = useCallback((value)=>{
        setLoginUser((prev)=>({...prev,password:value}))
    },[])

    const logOut = async()=>{
        await getRequest("http://localhost:8000/api/users/logout");
        window.location.reload();
    }

    return (
        <userContext.Provider value={{updateUsername,signupUser,updateEmail,updatePassword,logUser,logOut,updateLoginUser,updateLoginPassword,loginUser,isLoading,token}}>{children}</userContext.Provider>
    )
}

export default UserContextProvider