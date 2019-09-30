function f(f1){
    console.log('F starts to run');
    setTimeout(function(){
        let result='r';
        f1(result);
    } ,3000);
}

// firtly f will run for 3 sec. than f1 will complete
f(function(res){
    console.log('F has been completed and result is ' + res);
});