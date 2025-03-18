import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoutes from './components/ProtectedRoutes';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/UserContextProvider';
import Chat from './components/Chat';


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const {logUser} = useContext(userContext);
  useEffect(()=>{
    if(logUser) {
      setIsAuthenticated(true);
    }
  },[logUser])
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element = {<LoginForm isAuth={isAuthenticated}/>}></Route>
      <Route path='/signup' element ={<SignUpForm/>}></Route>
      <Route element = {<ProtectedRoutes isAuthenticated = {isAuthenticated}/>}>
        <Route path='/chat' element = {<Chat/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
