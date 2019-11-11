//for server side socket connection
//socket donot work with the express but we are using it here for the middlewares

const express = require('express')
//socket needs http request to work but it acquires it directly instead of express which is also made on http request
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app) 
const io = socketio(server)

//inside the folder name public
app.use('/',express.static(__dirname+'/public')) 

let idUserMap = {}

//io object is needed by both the server and client 
io.on('connection',(socket)=>{
    console.log('Connected '+socket.id) 
    //to see the event
    //can't make it outside becz socket object io  is unique for all client
    //it is asynchronous function's argument will be data that client is sending
    socket.on('chat',(data)=>{
        console.log(socket.id+' says '+data.msg) 
        //to check the response whether it is successful or not
        //take another response from server i.e take an event back
        //for all client ....data will have msg inside it
        io.emit('chat_recieved',{
            username:idUserMap[socket.id],
            msg:data.msg 
        }) 

        // *** Most Important Point..

        //for specific client
        // socket.emit('chat_recieved') 

        //for all client except the sender
        // broadcast.emit('chat_recieved')
    })

    socket.on('login',(data)=>{
        idUserMap[socket.id] = data.username
        socket.emit('loggedin') 
    })

})

server.listen(4321,()=>{
    console.log('http://localhost:4321') 
}) 