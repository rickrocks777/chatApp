import { useContext, useEffect, useState } from 'react';
import '../App.css'
import { userContext } from '../../context/UserContextProvider';
import { getRequest } from '../../apiConnector';
import { io } from 'socket.io-client';

function Chat() {
  const {token,logUser} = useContext(userContext);
  const [users,setUsers] = useState([]);
  const [message,setMessage] = useState(null);
  const [chats,setChats] = useState([]);
  const [selectedUser,setSelectedUser] = useState(null);
  const getUserList = async ()=>{
    const response = await getRequest("http://localhost:8000/api/users/listUser",token)
    setUsers(response.data);
  }
  useEffect(()=>{
    getUserList();
  },[token])
  
  const socket = io("http://localhost:7000");
  useEffect(()=>{
    socket.emit("userConnect",logUser)
  },[logUser])
  var chatArr = []
  useEffect(()=>{
    setChats(chatArr)
  },[])
  const sendMessage = () => {
    socket.emit("messageSent",{message,user:selectedUser,from:logUser});
    setChats(prev=>[...prev,{message,pos:"right"}])
  }
  const selectUser = (username) => {
    setChats([])
    setSelectedUser(username)
  }
  useEffect(()=>{
    socket.on("userArr",userArr => {
    console.log(userArr)
  })

  return () => {
    socket.off("userArr")
  }
  },[])

  useEffect(()=>{
    socket.on("receive",message => {
      console.log(logUser, message.from)  
      if(logUser === message.user && selectedUser === message.from) {
        setChats(prev=>[...prev,{message:message.message,pos:"left"}]);
      }
    })

    return () => {
      socket.off("receive")
    }
  },[chats])
    return (<>
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
            <div className="flex flex-col mt-8" style={{width:"263px"}}>
          <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Active Conversations</span>
            <span
              className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >4</span
            >
          </div>
          <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              {users.map((user,idx)=>{
                if(user.username !== logUser)
                 return (
                 <button key={idx} onClick={e => selectUser(user.username)}
                className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
              >
              <div
                className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div className="ml-2 text-sm font-semibold">{user.username}</div>
            </button>)
              })}
              
          </div>
          <div className="flex flex-row items-center justify-between text-xs mt-6">
            <span className="font-bold">Archivied</span>
            <span
              className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >7</span
            >
          </div>
          <div className="flex flex-col space-y-1 mt-4 -mx-2">
            <button
              className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                H
              </div>
              <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
          </div>
        </div>
              <div className="flex flex-col flex-auto h-full p-6">
                <div
                  className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
                >
                  <div className="flex flex-col h-full overflow-x-auto mb-4">
                    <div className="flex flex-col h-full">
                      <div className="grid grid-cols-12 gap-y-2">
                        {chats.map((chat)=>{
                          if(chat.pos==="left") return (<div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                              <div
                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                              >
                                A
                              </div>
                              <div
                                className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                              >
                                <div>{chat.message}</div>
                              </div>
                            </div>
                          </div>)
                          else return (<div className="col-start-6 col-end-13 p-3 rounded-lg">
                            <div className="flex items-center justify-start flex-row-reverse">
                              <div
                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                              >
                                A
                              </div>
                              <div
                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                              >
                                <div>{chat.message}</div>
                              </div>
                            </div>
                          </div>)
                        })}
                      
                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                  >
                    
                    <div className="flex-grow ml-4">
                      <div className="relative w-full">
                        <input onChange={e=>setMessage(e.target.value)}
                          type="text"
                          className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        />
                        <button
                          className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button onClick={sendMessage}
                        className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                      >
                        <span>Send</span>
                        <span className="ml-2">
                          <svg
                            className="w-4 h-4 transform rotate-45 -mt-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>)
}

export default Chat;