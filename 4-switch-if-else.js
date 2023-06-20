if(9==9){
    console.log("умова істинна")
}
else{
    console.log("умова хибна")
}

if(null){
    console.log("умова істинна")
}
else{
    console.log("умова хибна")
}

let num = 148;
if(num < 49){
    console.log("меньше 49")
}
else if(num > 100){
    console.log("більше 100")
}
else{
    console.log("ок")
}

// (true) ? <умова істинна> : <умова хибна>

(1==1) ? console.log("умова істинна") : console.log("умова хибна") //тернарний оператор

//оператор switch. Використовується, якщо є багато умов.

let number = 500;

switch(number){
    case 49:
        console.log('Value = 49');
        break;
    case 50:
        console.log('Value = 50');
        break; 
    case 500:
        console.log('Value = 500');
        break;
    default:
        console.log('Default output');
        break;
}