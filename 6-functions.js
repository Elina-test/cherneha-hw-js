let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c);

a = 15;
b = 13;
c = a + b;
console.log(c);


function sum(a, b){
    let c = a + b;
    console.log(c);
}

sum(15, 13)
sum(1, 3)

let sumResult = sum(1, 2)

function someFn(a, b){
    let c = a + b;
    return c;
}

let sumResult2 = someFn(1, 2);
console.log(sumResult2)
//console.log(someFn(2, 5))

