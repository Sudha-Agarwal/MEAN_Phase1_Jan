function counter(){
    let counter=0;
    return {
        increment: function(){
        counter +=1;
        console.log(counter);
    }  ,    
    decrement:function(){
        counter -= 1;
        console.log(counter);
    }
}   
}

let obj = counter();
obj.increment();
obj.increment();
obj.decrement();
