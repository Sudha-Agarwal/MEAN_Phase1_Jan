var getTodo = function(){
        //simulate server response delay
    setTimeout(function() {
       console.log("first Statement");
       console.log("second statement");       
    },200000);
    console.log("after setTimeout");
    setTimeout(function (){
        console.log("second SetTimeout");
    },1000);
}
//getTodo();

//without callback
var getTodo1 = function(){
    //simulating server response delay using setTimeOut
    setTimeout(function(){
        return {text:'Server response'};
    });
}
//var data = getTodo1();
//console.log(data.text);

//with callback

var getTodo2 = function(callback1){
    setTimeout(function(){
        //getting data from server and then calling callback function
        callback1({text:'Server response'});
    },2000);
};
function printData(data){
    console.log(data.text);
}
getTodo2(printData);

console.log("after receieving data");
//some other statements


//first way
//getTodo2(printData);
//second way
/*getTodo2(function(data){
    console.log(data.text);
});*/




/*
//JSON - JavaScript Object Notation
//CSV:
"Sudha",101,"IT";
"Sudha1", 102, "Finance";

XMLDocument:
<name>Sudha</name>
<empid>101</empid>
<dept>IT</dept>

<name>Sudha1</name>
<empid>102</empid>

//JSON
emp1 = {name:"Sudha",empid:101,dept:"IT"};
emp2 = {name:"Sudha1",empid:102,dept:"Finance"}

[emp1,emp2];

[
    {name:"Sudha",empid:101,dept:"IT"},
    {name:"Sudha1",empid:102,dept:"Finance"}
];

*/