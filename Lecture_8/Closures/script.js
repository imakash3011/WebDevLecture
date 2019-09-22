// function outerfun(){
//     let x=0;
//     function innerfun(){
//         x++;
//         return x;
//     }
//     return innerfun;
// }
// closures will form an annoymous function

// let fun=outerfun();
// let fun1=outerfun();
// let fun2=outerfun();

// console.log(fun());
// console.log(fun());
// console.log(fun());

// console.log(fun1());
// console.log(fun1());

// console.log(fun2());
// console.log(fun2());
// console.log(fun2());



function outerfun(){
    let x=0;
    function innerfun(){
        x++;
        function innermostfun(){
            x++;
            return x;
        }
        return innermostfun;
    }
    return innerfun;
}

let fun=outerfun();
let funx=outerfun();

let fun1=fun();
let fun2=fun();
let fun3=fun();

console.log(fun1());
console.log(fun1());
console.log(fun1());

console.log(fun2());
console.log(fun2());

console.log(fun3());
console.log(fun3());

console.log(funx());
console.log(funx());
console.log(funx());