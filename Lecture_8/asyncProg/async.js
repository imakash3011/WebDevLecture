// function myfun(){
//     console.log('Function is running');
// }

// setTimeout(function(){
//     console.log('Function is running')
// } ,2000);

let id=setInterval(function(){
        console.log('Function is running');
    } ,1000);

setTimeout(function(){
    clearInterval(id);
    //// console.log('Running')
},5000);

    // console.log(id);
