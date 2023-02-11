const addTwonum = (num1, num2) => num1 + num2;
//var result = addTwonum(2,3);
//console.log(result);
const sqr = num => num*num;
var res = sqr(2);
console.log(res);
console.log(sqr(2));
const print = () => "hi";
var obj = {
    id:20,
    counter:function(){
        setTimeout(function(){
            this.id++;
            console.log(this.id);
        },1000)
    }
}
obj.counter();
var obj1 = {
    id:20,
    counter:function(){
        setTimeout(() => {
            this.id++;
            console.log(this.id);
    },1000)
    }
}
obj1.counter();

