const express=require('express')
//calling the function 
const server=express()

server.get('/',(req,res)=>{
    res.send('Hello World!')
})

server.get('/greet',(req,res)=>{
    res.send('Good-${req.query.day}!  ${req.query.name}')
})

//accessing the parameter using req.params.name
server.get('/greet/:name',(req,res)=>{
    res.send('Good Night ' + req.params.name)
})

server.get('/greet/:name/:day',(req,res)=>{
    res.send('Gooooooood Morning ' + req.params.name)
})


server.get('/file',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

// server.get('/server.js',(req,res)=>{
//     res.send('console.log('Hello world!')')
// })

server.use('/staticfile', express.static(__dirname +'/static'))

//port should be greater than 1024 becz lesser one's are reserved
server.listen(4343)


