

//function definition
function myFunc(){
    //document.getElementById("p1").innerHTML = "Changed by JS";   
    return 1;
}

function f1(){

}

//variable creation using 'var' keyword
var x = 10.01; //number
var y = "String"; //string
var z = true; //boolean

var a = null;

console.log(a);

var res = myFunc();//function calling
console.log(res);
alert(res);
document.write(res);


function onButtonClicked(){
    document.getElementById("p1").innerHTML = "Changed by JS";
}


//objects:
//different ways to create an object

//1. by object literal

var emp = {
    name: 'Sudha',
    id:101,
    sal:20000,
    dob:'18/8/1990',
    dept:'IT',
    display: function(){
        console.log("display function called");        

    },
    display:function(){
        console.log("display1 function called");  
    }
}

//2. By creating instance of Object directly(using new keyword)
//new keyword is used to create an object

var emp2 = new Object();
emp2.id = 102;
emp2.name= 'Sudha1';

emp.name="Changed value";

console.log(emp.name); //accessing object property

emp.display();//accessing object function




