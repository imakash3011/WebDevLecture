function original(){
    console.log(this);
    function notoriginal(){
        console.log(this);
    }
    notoriginal();
}

original();

let obj={
    k:1,
    getProp:function(){
        return this;
    }
}
// console.log(obj.getProp());

function f(x,y){
    console.log(this);
    console.log(x+y);
}

f.call(obj,10,20);
// f.bind(obj);
var s=f.bind(obj,10,20);

function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}

// Person('Harry Potter',20); it will run in context of window.name or age

let p= Person('Harry Potter',20); 
