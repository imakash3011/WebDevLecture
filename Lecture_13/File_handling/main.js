const fs = require('fs')
const path = require('path')

let file = path.join(__dirname,'/Helo.txt');

console.log(__dirname);

fs.readFile(
    file,
    (err,data)=>{
        if(err) throw new Error('Could not read')
        console.log(data.toString())
    }
)


// fs.writeFile(
//     file,
//     'Hello World!',
//     {
//         encoding:'utf8',
//         flag:'a'
//     },
//     (err)=>{
//         if(err) throw err
//         console.log('File Written successfully')
//     }
// )

console.log('Code is getting executed');




////////////My Notes






// const fs=require('fs')
//automatically handles the path /
// const path=require('path')

//to know location
// console.log(__dirname);

// let file=path.join(__dirname + '/Hello.txt');

// fs.writeFile(
   // // __dirname + '/Hello.txt'  we can use this method or following method to specifies the pathwhere we want to write data
//     file,
//     'Hello World',
//     (err)=>{ 
//     if(err) throw err
//     console.log('File written successfully')

//     }
//     )


// fs.readFile(

//     file,
     //1 way to change buffer data to string (following method is not complete)
    // {
    //     encoding
    // }
//     (err,data) =>
//     {
//             if(err) throw err
//             //2 way to change buffer data to string
//     console.log(data.toString())

//     }
// )