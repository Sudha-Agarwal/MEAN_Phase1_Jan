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
            this.balance = this.balance + amount;
        };
        this.withdraw = function (amount) {
            this.balance = this.balance - amount;
        };
        this.getBal = function () {
            console.log("Balance is: " + this.balance);
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

var account1 = new Account(10000,123,"Savings");

account1.getBal();
account1.deposit(500);
account1.getBal();


class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    /*name;
    age;
    height;
    weight;
    legs2;
    address;
    adhhar_no;
    gender;
    */
}

class Employee extends Person{
    empId;
    dept;

}

class Student extends Person{
    rollNo;
}

class Animal{   
  constructor(tail,legs,specie){
    this.tail = tail;
    this.legs = legs;
    this.specie = specie;
  }
  showDetails(){
    console.log(this.specie + " having legs " + this.legs);
  }
}
class Dog extends Animal{
   senseOfsmell;
    constructor(tail,legs,specie,loyalty){
        super(tail,legs,specie);//call the constructor of the parent class
         this.loyalty = loyalty;
    }   
    setSenseofSmell(senseOfsmell){
        this.senseOfsmell = senseOfsmell;
    }

    //method/function overriding
    showDetails(){
        super.showDetails();
        console.log("sense of smell: " + this.senseOfsmell);
    }
}
class Cow extends Animal{
    givesMilk;
}

var dog1 = new Dog(true,4,"pug",true);
dog1.setSenseofSmell("strong");
dog1.showDetails();

var person1 = new Person();
var person2 = new Person();


