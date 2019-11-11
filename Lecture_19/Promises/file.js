const fs = require('fs')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

fs.readFile(F1,(err,data)=>{
    //toString is used here for type casting 
    let nums = data.toString().split('\n')
    fs.readFile(F2,(err,data)=>{
        //after reading F1 ,read F2 and join their content together
        nums = nums.concat(data.toString().split('\n'))
        //https://www.freecodecamp.org/forum/t/arr-sort-a-b-a-b-explanation/167677 refer it to understand following line
        nums.sort((a,b)=>(a-b))  
        //after joining their content together sort the data and store in F3
        fs.writeFile(F3,nums.join('\n'),(err)=>{
            if(err) throw err
            console.log('Done') 
        })
    })
})