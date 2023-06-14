console.log('Hello ' + 'world')

console.log(2+2)

console.log('2' + 2)

console.log(2 + + '2')
console.log('2' + + 2)

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

++incr;
--decr;

console.log(incr);
console.log(decr);

let incr1 = 10;
let decr1 = 10;

console.log(incr1++); //додає 1 після виведення, ми змін не побачимо 
console.log(decr1--);

console.log(++incr1); //додає 1 до виведення, одразу побачимо нові цифри
console.log(--decr1);

console.log(5 < 2)
console.log(2*4 == 8) //нестроге порівняння
console.log(2*4 == '8')
console.log(2*4 === 8) //строге порівняння

console.log(2*4 != 7) // не дорівнює
console.log(2*4 !== '8') //строге не дорівнює

let isChecked = true;
let isClosed = false;

//console.log(isChecked && isClosed) //логічне і
//console.log(isChecked || isClosed) //логічне або

console.log(isChecked && !isClosed) //логічне і
console.log(!isChecked || isClosed) //логічне або

// Я хочу купити картоплю та гамбургер, якщо обидва товари є в наявності, я їх купую і буду ситий.

let hamburger = false;
let fries = true;

if(hamburger && fries){
    console.log("Я ситий")
}
else{
    console.log("Я голодний")
}

let hamburger1 = 1;
let fries1 = 0; //null, "", NaN, undefined

if(hamburger1 && fries1){
    console.log("Я ситий")
}
else{
    console.log("Я голодний")
}

// Я хочу купити або 3 гамбургера і колу, або 2 порції нагетсів і 2 картоплі фрі, якщо один з цих наборів є - я буду ситим.

let hamburgers = 2;
let cola = 2;
let nuggets = 1;
let friesPotato = 2; 

if(hamburgers > 2 && cola || nuggets > 1 && friesPotato > 1){
    console.log("Я ситий")
}
else{
    console.log("Я голодний")
}


