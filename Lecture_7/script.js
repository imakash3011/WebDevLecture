// alert('Hello World!');
// name = prompt('Enter your name');
// alert('Hello '+name);

// console.log(name);
// name = 10;
// console.log(name);

// const a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// var a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// let a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// if(true){
//     var x = 10;
//     console.log(x);
//     x = 20;
// }
// console.log(x);

// function fun(){
//     let x = 10;
//     if(true){
//         console.log(x);
//         let x = 30;
//         x = 20;
//     }
// }
// function fun(){
//     var x = 10;
//     if(true){
//         console.log(x);
//         var x = 30;
//         x = 20;
//     }
// }
// fun();
// console.log(x);
// 'use strict'

// let str = "Hello \"World\"";
// console.log(str);
// console.log(typeof str);
// str = 'H';
// console.log(str)
// console.log(typeof str);

// let obj={
//     a:10,
//     b:'Hello World',
//     c:10.11
// }
// let obj1={
//     'a':10,
//     'b':'Hello World',
//     'c':10.11,
//     '':'empty',
//     ' ':true,
// }


// let arr = ['hello',1,2,3,true,10.11];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let a = 10;
// let b = 10.11;
// let c = 'Hello';
// let d = 'h';
// let e = true;
// let obj = {a:10,b:20};
// let arr = [10,20,30];
// let f;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof obj);
// console.log(typeof arr);

// let a = '10'+1;
// console.log(a);

// let b = '10' - 1;
// console.log(b);

// let c = '10' + 1 + 1;
// console.log(c)

// let arr = [10,20,30];
// let b = arr;
// console.log(arr == b);

// let obj = {a:10,b:20};
// let c = obj;

// let a =10;
// let b =20;

// function swap(a,b){
//     temp = a;
//     a= b;
//     b= temp;
// }
// console.log(a,b);
// swap(a,b);
// console.log(a,b);    

// let arr =[10,20];
// function swap1(arr){
//     temp = arr[0];
//     arr[0]= arr[1];
//     arr[1]=temp;
// }
// console.log(arr[0],arr[1]);
// swap1(arr);
// console.log(arr[0],arr[1]);  

// let a =parseFloat('11.11');
// console.log(a);

function add(a=0,b=0,c=0){
    return a+b+c;
}

console.log(add())
console.log(add(10))
console.log(add(10,20))
console.log(add(10,20,30))













// alert('hello world!');

// name=prompt('input your name');
// alert('Hello ' + name);

// console.log(name);
// console.log(10);

// const a=12;
// console.log(a);
// a=100;
// console.log(a);

// var a=122;
// console.log(a);
// a=100;
// console.log(a);

// let a=122;
// console.log(a);
// a=100;
// console.log(a);


// let x=10;
// if(true){
//     console.log(x);
//     x=20;
// }
// console.log(x);


// if(true){
    // let is block scope
//     let x=10;
//     console.log(x);
//     x=20;
// }
// console.log(x);

// let x=10;
// function fun(){
//     console.log(x);
//     x=20;
// }

// fun();
// console.log(x);



// function fun(){
//     let x=10;
//     if(true){
//         let x=30;
//         console.log(x);
//         x=20;
//     }
// }
// fun();
// console.log(x);


// function fun(){
//     var x=10;
//     if(true){
        
//         console.log(x);
//         var x=30;
//         x=20;
//     }
// }
// fun();
// console.log(x);


// let str='Hello World!';
// escape character 
// let str="Hello \" World!";
// console.log(str);


// 'use strict'

//  let str='Hello World!';
// // escape character 
//  str="Hello \" World!";
// console.log(typeof str);
// console.log(str);

// Object
// let obj={
//     a:10,
//     b:'hello world',
//     c:10.11
// }
// // console.log(obj);


// let obj1={
//     'a':10,
//     'b':'hello world',
//     'c':10.11,
//     // '':true,
//     '':'classroom'
// }

// let arr=[12,23,32,'hello',10.11,true];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// let a=10;
// let b=10.11;
// let c='Hello';
// let d='h';
// let e=true;
// let obj={a:10,b:20};
// let f;
// let arr=[10,20,30];
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof obj);
// console.log(typeof f);
// console.log(typeof arr);


// let a='10'+1;
// console.log(a);

// let b='10'-1;
// console.log(b);

// let c='10'+1-1;
// console.log(c);


// let d='10'+1+1;
// console.log(d);


// let arr=[10,20,30];
// let b=arr;
// console.log(arr==b);

// let obj={a:10,b:30};
// x={a:10,b:30};
// let x=obj;
// console.log(obj==x);

// let a=10;
// let b=20;
//  function swap(a,b){
//      let temp=a;
//      a=b;
//      b=temp;
//  }
// console.log(a,b)
// swap(a,b);
// console.log(a,b);


// console.log(a,b)
//  let temp=a;
//  a=b;
//  b=temp;
//  console.log(a,b)

// let arr=[10,20];
// function swap1(arr){ 
//   temp=arr[0];
//   arr[0]=arr[1];
//   arr[1]=temp;
// }
// console.log(arr[0],arr[1]);
// swap1(arr);
// console.log(arr[0],arr[1]);


// console program

// []+{}
// "[object Object]"
// {} +[]
// 0

// + 'aads'
// NaN

// +[[[]]]
// 0
// [].toString
// ƒ toString() { [native code] }

// [].toString()
// ""

// [10,20].toString()
// "10,20"

// [[],[]].toString()
// ","

// +[[],[]]
// NaN

// Infinity
// Infinity

// 3/0
// Infinity

// 0/0
// NaN

// Infinity-Infinity
// NaN


// let a=parseInt('11');
// console.log(a);

// function add(a,b,c){
//     return a,b,c;
// }

// console.log(add(10));
// console.log(add(10,20));
// console.log(add(10,20,30));