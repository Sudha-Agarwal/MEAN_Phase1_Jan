function myAsyncFunction(name){    
    var promise = new Promise(function(resolve1,reject1){
        if(name == "Sudha"){
            resolve1("Promise resolved");
        }
        else {
            reject1("Promise rejected");
        }
    })
    return promise;
}
function resolvepromise(data){
    console.log(data);
}
function rejectpromise(data){
    console.log(data);
}
//first way
//myAsyncFunction("Sudha1").then(resolvepromise).catch(rejectpromise);

//second way
/*myAsyncFunction("Sudha").then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data);
});*/

//myAsyncFunction("Sudha").then(resolvepromise, rejectpromise);

/*myAsyncFunction("Sudha1").then(function(data){
    console.log(data);
},
function(data){
    console.log(data);
}
)*/

//with arrow function
myAsyncFunction("Sudha").then(
    data => console.log(data),
    error=>console.log(error)
);
myAsyncFunction("Sudha").then(data => console.log(data)).catch(data=> console.log(data));

