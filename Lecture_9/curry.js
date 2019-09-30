// function outerfun(){
//     console.log();
//     let x=0;
//     function innerfun(){
//         x++;
//         return x;
//     }
//     return innerfun;
// }

// let a=outerfun()();
// console.log(a);



// function outerFun(){
//     let x = 0;
//     function innerFun(){
//         x++;
//         return x;
//     }

//     return innerFun;
// }
// let a =outerFun()();



// function add(val) {
// 	// let ans = val;
// 	function helper(nextVal) {
// 		if (typeof nextVal == "undefined") {
// 			return val
// 		}
// 		val += nextVal
// 		return helper
// 	}
// 	return helper
// }

// console.log(add(1)(2)(3)())
// console.log(add(1)(2)(3)(1)(2)(3)())
// console.log(add(1)(2)(3)(1)(2)(3)(1)(2)(3)(1)(2)(3)())
// console.log(add(2)())


function outerfun(){
    let x=0;
        function innerfun(){
        x++;
        return x;
    }
    return innerfun;
}

function add(val){
    // let ans=val;
    function helper(nextVal){
        if(typeof nextVal=='undefined'){
            return val;
        }
        val +=nextVal;
        return helper;
    }
    return helper;
}

console.log(add(1)(2)());
console.log(add(1)(2)(3)(4)(5)());
console.log(add(1)(4)(2)(4)(3)(6)(7)(6)());
// console.log(2);