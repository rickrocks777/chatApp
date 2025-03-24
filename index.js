const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')
const chatRoute = require('./routes/chatRoutes')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.use('/api/users',userRoute)
app.use('/api/chats',chatRoute)
app.listen(8000)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db");
})