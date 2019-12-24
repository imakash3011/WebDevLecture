const express = require('express')
const app = express()
const {calculateFare}=require('./fareutils')

app.use('/',express.static(__dirname+'/public'))

app.get('/fare',(req,res)=>{
    let fare = calculateFare(req.query.km,req.query.min)
    res.send({fare})
})

module.exports={
    app
}

// app.listen(4343,()=>{
//     console.log('http://localhost:4343')
// })


// const express = require('express')
// const app = express()

// app.use('/',express.static(__dirname+'/public'))

// app.get('/fare',(req,res)=>{
//     let km = parseFloat(req.query.km)
//     let min = parseInt(req.query.min)

//     //business logic
//     let fare = 25 + ((km-2)*8) +(min-15)
//     res.send({
//         fare
//     })
// })

// app.listen(4343,()=>{
//     console.log('http://localhost:4343')
// })