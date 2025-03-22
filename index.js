const http = require('http');
const {Server} = require("socket.io")

const httpServer = http.createServer();
const io = new Server(httpServer,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET","POST"]
    }
})
var userArr = [];
io.on("connection",(socket)=>{
    socket.on("userConnect",(name)=>{
        userArr.push({name:name,id:socket.id})
        console.log(userArr)
        socket.emit("userArr",userArr)
    });

    socket.on("messageSent",(message)=>{
        console.log(message);
        socket.broadcast.emit("receive",message);
    })

    socket.on("disconnect",()=>{
        userArr = userArr.filter((e)=>{
            return e.id!==socket.id;
        });
    })
})

httpServer.listen(7000);