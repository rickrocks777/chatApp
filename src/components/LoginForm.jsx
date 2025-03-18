import { useContext } from "react";
import { userContext } from "../../context/UserContextProvider";
import { postRequest } from "../../apiConnector";
import { Navigate } from "react-router-dom";

function LoginForm({isAuth}) {
    const {updateLoginUser,updateLoginPassword,loginUser} = useContext(userContext);
    console.log(loginUser)
    const loginapiCall = async(e) =>{
        e.preventDefault();
        const response = await postRequest("http://localhost:8000/api/users/login",loginUser);
        window.location.reload()
        console.log(response)
    }

    return !isAuth ? (<div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Login</h1>
          <form>
            <div class="mb-4">
              <label for="apellido" class="block mb-2 text-sm text-gray-600">Username</label>
              <input type="text" id="apellido" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={(e)=>updateLoginUser(e.target.value)} required/>
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-sm text-gray-600">password</label>
              <input type="password" id="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={(e)=>updateLoginPassword(e.target.value)} required/>
            </div>
            <button onClick={loginapiCall} type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Login</button>
          </form>
          <div class="text-center">
            <p class="text-sm">Call us<a href="#" class="text-cyan-600">Anuplab Enterprise</a></p>
          </div>
          <p class="text-xs text-gray-600 text-center mt-8">&copy; 2025 all rights reserverd</p>
        </div>
      </div>) : <Navigate to ='/chat'></Navigate>
}

export default LoginForm;