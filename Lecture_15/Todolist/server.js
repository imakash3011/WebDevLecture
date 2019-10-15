const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//it is used to provided whole public folder folder
app.use('/',express.static(__dirname+'/public'))

let todolist = [] // {name:abcd,priority:3}

app.get('/todos',(req,res)=>{
    res.send(todolist)
})

app.post('/todos',(req,res)=>{
    todolist.push({
        name: req.body.name, 
        priority: +(req.body.priority||1) 
    })
    res.send({
        todoId:todolist.length,
        success:"true"
    })
})


app.delete('/todos', (req, res)=> {
    res.send(todolist);
});



app.listen(4343,()=>{
    console.log('Server started at http://localhost:4343')
})







// notes


// const express=require('express')
// const app=express()

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.use(express.static(__dirname+'/public'))
// let todolist=[]

// app.get('/todos',(req,res)=>{
//     res.send(todolist)
// })

// app.post('/todos',(req,res)=>{
//     //post generally means adding to the collection
//     todolist.push({
//         //inside this object we are passing two parmeters
//         name:req.body.name,
//         // + here denotes changing string to int  and || 1 means default value
//         priority:+(req.body.priority || 1)

//     })

//     res.send({
//         todoId:todolist.length,
//         success:"true"
//     })
// })

// app.listen(4343,()=>{
//     console.log('Server started at http://localhost:4343')
// })