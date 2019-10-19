const express = require('express')
const route = express.Router()

let courses = []

route.get('/',(req,res)=>{
    res.send(courses)
})

route.post('/',(req,res)=>{
    courses.push({
        name:req.body.name,
        teacher:req.body.teacher,
        lectures:req.body.lectures,
        subject:req.body.subject
    })
    res.send({
        message:'success',
        id:courses.length
    })
})

module.exports = route