import { useContext } from "react";
import { Navigate,Outlet } from "react-router-dom"
import { userContext } from "../../context/UserContextProvider";

function ProtectedRoutes({isAuthenticated}) {
    const {isLoading,logUser} = useContext(userContext);
    console.log(isAuthenticated)
    if(isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        logUser ? <Outlet/> : <Navigate to = '/'/>
    );
}

export default ProtectedRoutes