/*
function one(var1, callback){
    //console.log(callback);
    callback(var1);
}
function two(param2){
    console.log("function two called");
    console.log(param2);
}
one("parameter1", two);

//some js statements
//read operation - it will take some time
//print data/process data
//some js statements




*/
function one(callback){
    console.log("One");
    callback("param2");//function calling
}
function two(param2){
    console.log(param2);
    console.log("Two");
}
function three(){
    console.log("Three");
}
//First way
//one(two);

//second way
one(function(param2){
    console.log(param2);
    console.log("Two");
});

//two();

//function definition
var x1 = function(z){
    console.log("function with value: " + z);
    return 1;
}

var y = x1("z");//function calling

