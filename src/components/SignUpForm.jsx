import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { userContext } from '../../context/UserContextProvider';
import { postRequest,getRequest } from '../../apiConnector';

function SignUpForm() {
    const {updateUsername,signupUser,updateEmail,updatePassword} = useContext(userContext);
    const apiCall = async(e) =>{
      e.preventDefault();
      const response = await postRequest("http://localhost:8000/api/users/signup",signupUser);
      window.location.reload()
    }

    return(<div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
          <form>
            <div class="mb-4">
              <label for="nombre" class="block mb-2 text-sm text-gray-600">Email Id</label>
              <input type="email" id="nombre" name="nombre" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={(e)=>updateEmail(e.target.value)} required/>
            </div>
            <div class="mb-4">
              <label for="apellido" class="block mb-2 text-sm text-gray-600">Username</label>
              <input type="text" id="apellido" name="apellido" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={(e)=>updateUsername(e.target.value)} required/>
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-sm text-gray-600">password</label>
              <input type="password" id="password" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" onChange={(e)=>updatePassword(e.target.value)} required/>
            </div>
            <button onClick={apiCall} type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Sign Up</button>
          </form>
          <div class="text-center">
            <p class="text-sm">Call us<a href="#" class="text-cyan-600">Anuplab Enterprise</a></p>
          </div>
          <p class="text-xs text-gray-600 text-center mt-8">&copy; 2025 all rights reserverd</p>
        </div>
      </div>)
}

export default SignUpForm