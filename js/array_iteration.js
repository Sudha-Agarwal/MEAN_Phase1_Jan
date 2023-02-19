const arr = [1,2,3,4];

const arr1 = new Array(1,2,3,4);

arr[0]; //1
arr[1]; //2
arr[2];//3
arr[3]; //4

for(var i=0;i<arr.length; i++){
    //console.log(arr[i]);
}

function printArray(value){
    console.log(value);
}
//first way
//arr.forEach(printArray);

//second way
arr.forEach(function(value){
    console.log(value);
});
//with arrow
arr.forEach(value => console.log(value));


var arr_of_obj = [{
    fname:"Sudha",
    lname:"Agarwal"
},
{
    fname:"Sudha1",
    lname:"Agarwal1"
}
];

arr_of_obj.forEach(item=> console.log(`${item['fname']} ${item.lname}`));

//template literal or string literal

var fname = "Sudha";
var lname = "Agarwal";

var str1 = `World`; //string/template literal

console.log("Welcome " + fname + " " + lname);

//with template literal - allows to have variables in string
console.log(`Welcome ${fname} ${lname}`);
