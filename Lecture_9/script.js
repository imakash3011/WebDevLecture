// function f(){
//     return 1;
// }


// Constructors

// function Person(){
//     return 1;
// }

// let p=Person();
// let p1=new Person();

// console.log(p);
// console.log(p1);

// function Person(name,age){
//     // this.age=age;
//     this.name=name;
//     this.getFirstName=function(){
//        this.name.split(' ')[0];
//     }
//     this.isadult = function(){
//         return age>=18;
//     }
// }
// let p= new Person('Harry Potter',18);
// let p1= new Person('Bruce ',19);

// Person.staticFun=Person.prototype.staticFun=function(){
//     console.log('This is static ');
// }


// function Person(name,age){
// console.log(this);
// }

// Person('Harry Potter',18);


// console.log(this);

// Person.call(o);

// let x=Person.bind(o);
// x();

// let o={
//     k:1,
//     l:function(){
//         return this;
//     }
// }


// Person('Harry Potter',18);

// address of current window
// console.log(this);


// function f(){
//     console.log(this);
// }
// let a=new f();
// console.log(a);