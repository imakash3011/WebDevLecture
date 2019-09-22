// function outerFun(anotherFun){
//     console.log('This is outer fun '+anotherFun());
// }

// function innerFun(){
//     console.log('This is inner fun');
// }

// outerFun(innerFun);
function outerFun(){
    console.log('This is outerFun');
    function newFun(){
        console.log('This is new fun');
    }
    return newFun;
}

let fun=outerFun();
fun();










// function outerfun(anotherfun){
//     console.log('This is outer fun ' + anotherfun());
// }

// function innerfun(anotherfun){
//     console.log('This is outer fun' );
// }
// // outerfun();
// outerfun(innerfun);


// function outerfun(anotherfun){
//     console.log('this is outer fun');
//     function newfun(){
//         console.log('this is new fun');
//     }
//     return newfun
//     // console.log('This is outer fun ' + anotherfun());
// }


// let fun=outerfun();
// fun();
