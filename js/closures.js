function greeting(){
    let message = 'hi';

    function sayhi(){
        console.log(message);
    }
    return sayhi;
}

let hi = greeting();
console.log(hi);
hi();
