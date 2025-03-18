import '../App.css'

function Chat() {

    return (<>
        <div class="flex h-screen antialiased text-gray-800">
            <div class="flex flex-row h-full w-full overflow-x-hidden">
            <div class="flex flex-col mt-8" style={{width:"263px"}}>
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Active Conversations</span>
            <span
              class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >4</span
            >
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                H
              </div>
              <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
              >
                M
              </div>
              <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
              <div
                class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
              >
                2
              </div>
            </button>
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full"
              >
                P
              </div>
              <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
            </button>
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
              >
                C
              </div>
              <div class="ml-2 text-sm font-semibold">Christine Reid</div>
            </button>
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full"
              >
                J
              </div>
              <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
            </button>
          </div>
          <div class="flex flex-row items-center justify-between text-xs mt-6">
            <span class="font-bold">Archivied</span>
            <span
              class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
              >7</span
            >
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 bg-white"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                H
              </div>
              <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
          </div>
        </div>
              <div class="flex flex-col flex-auto h-full p-6">
                <div
                  class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
                >
                  <div class="flex flex-col h-full overflow-x-auto mb-4">
                    <div class="flex flex-col h-full">
                      <div class="grid grid-cols-12 gap-y-2">
                        <div class="col-start-1 col-end-8 p-3 rounded-lg">
                          <div class="flex flex-row items-center">
                            <div
                              class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                            >
                              A
                            </div>
                            <div
                              class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                            >
                              <div>Hey How are you today?</div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-start-6 col-end-13 p-3 rounded-lg">
                          <div class="flex items-center justify-start flex-row-reverse">
                            <div
                              class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                            >
                              A
                            </div>
                            <div
                              class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                            >
                              <div>I'm ok what about you?</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                  >
                    
                    <div class="flex-grow ml-4">
                      <div class="relative w-full">
                        <input
                          type="text"
                          class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        />
                        <button
                          class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                        >
                          <svg
                            class="w-6 h-6"
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
                    <div class="ml-4">
                      <button
                        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                      >
                        <span>Send</span>
                        <span class="ml-2">
                          <svg
                            class="w-4 h-4 transform rotate-45 -mt-px"
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