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
//print data
//some js statements