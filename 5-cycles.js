let num = 80;

while(num < 90){
    console.log(num) //infinit loop
}

let num1 = 80;

while(num1 < 90){
    console.log(num1) // жодна ітерація не виконуєтсья, якщо умова хибна
    num1++;
}

let num2 = 80;

do {
    console.log(num2) // спочатку виконується do (одна ітерація), навіть якщо умова хибна
    num2++;
}
while(num2 < 90);


// WHILE, DO-WHILE НЕ ПРАЦЮЮТЬ В CYPRESS

let num3 = 800;


for(let i = 0; i < 8; i++){
    console.log(num3);
    num3++;
}


let num4 = 80;


for(let i = 0; i < 8; i++){
    if(num4 === 85){
        break; // зупиняє цикл
    }
    console.log(num4);
    num4++;
}


let num5 = 80;


for(let i = 0; i < 8; i++){
    if(i === 4){
        continue; // пропускає 4-ту ітерацію
    }
    console.log(i);
  
}

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`); //інтерполяція виведе i = 0, i = 1, i = 2

    for(let j = 0; j < 3; j++)
        console.log(`j = ${j}`);
}