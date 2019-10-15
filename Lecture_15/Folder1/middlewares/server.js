const express=require('express')
const app=express()


//to enable th json decoder 
app.use(express.json())

app.use(express.urlencoded({extended:true}))


// function m1(req,res,next) {
//     console.log('running m1')
//     next()
// }

// function m1(req,res,next) {
//     console.log('running m1')
//     if(req.query.m==1){
    ////if it will return than the following code will not run
//        return  res.send('welcome here')
//     }
//     next()
// }

//also keep checking the console to view running middleware ..etc

function m1(req,res,next) {
    console.log('running m1')
    //to run following line http://localhost:4444/?m=1
    if(req.query.m==1){
        res.send('welcome here')
    }else{
        next()
    }
    
}

function m2(req,res,next) {
    console.log('running m2')
    next()
}

function m3(req,res,next) {
    console.log('running m3')
    next()
}

//middleware
app.use(m1)
app.use(m2)
//changing the route os m3 i.e it will run on /bye or /bye/... but will not run for/bye...
app.use('/bye',m3)



//it is path specified i.e routed
app.get('/' ,(req,res)=>{
    res.send('Hello')
})

app.get('/bye' ,(req,res)=>{
    res.send('Good Bye!!!!!!')
})


app.post('/bye',(req,res)=>{
    console.log(req.body)
    res.send('we will meet again!!!')
})

app.listen(4444,()=>{
    console.log('server started at http://localhost:4444')
})