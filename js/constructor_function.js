//contructor functions are used to create objects
//function without parameters
function f1(){
}

f1();//function calling with no arguments
//function with parameter
function f2(name,age){
    console.log(name);
}

f2("Sudha",30);//function calling with 2 arguments

function Person(name1, age1){
    this.name = name1;
    this.age = age1;
    this.speak = function(){
        console.log(this.name + " is speaking");
    }
}
var obj1 = new Person("Sudha",40);

console.log(obj1.name);
obj1.speak();


var obj2 = new Person("Sudha1",30);
console.log(obj2.name);

class Account {
    constructor(balance, customerId, type) {
        this.balance = balance;
        this.customerId = customerId;
        this.type = type;      

        this.deposit = function (amount) {
            this.bal = this.bal + amount;
        };
        this.withdraw = function (amount) {
            this.bal = this.bal - amount;
        };
        this.getBal = function () {
        };
    }
}

class SavingsAccount extends Account{   
    constructor(roi){
        //this.bal = bal;//no need for this
        this.roi = roi;
        this.calculateInterest = function(){
            //calculate interest
        }
    } 
}
class DematAccount extends Account{    

}

new SavingsAccount();