
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

    let hamburgers = 3;
    let fries = 1;
    
    if(hamburgers >= 4 && fries >= 1){
        console.log("Ми поїли")
    }
    else{
        console.log("Ми йдемо в інше кафе")
    }


/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

    let productPrice = 1001;

    if (productPrice >= 1000 && productPrice <= 1900) {
        console.log("Значення ціни товару між 1000 та 1900");
    } else {
        console.log("Значення ціни товару не знаходиться між 1000 та 1900");
    }


/*3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    let productPrice1 = 900;
   
    if (!(productPrice1 >= 1000 && productPrice1 <= 1900)) {
        console.log("Значення ціни товару не знаходиться між 1000 та 1900");
    } else {
        console.log("Значення ціни товару між 1000 та 1900");
    }

    let productPrice2 = 1901;

    if (productPrice2 < 1000 || productPrice2 > 1900) {
        console.log("Значення ціни товару не знаходиться між 1000 та 1900");
    } else {
        console.log("Значення ціни товару між 1000 та 1900");
    }


/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

    let seasonNum = 4;

    if (seasonNum === 1) {
        console.log("Зима");
    } else if (seasonNum === 2) {
        console.log("Весна");
    } else if (seasonNum === 3) {
        console.log("Літо");
    } else if (seasonNum === 4) {
        console.log("Осінь");
    } else {
        console.log("Відсутні дані з таким номером");
    }

/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    let a = 8;
    let b = 9;
    let c = 10;

    if (a > b) {
        if (b > c) {
            console.log("Середнє число b: " + b);
        } else if (a > c) {
            console.log("Середнє число c: " + c);
        } else {
            console.log("Середнє число a: " + a);
        }
    } else {
        if (a > c) {
            console.log("Середнє число a: " + a);
        } else if (b > c) {
            console.log("Середнє число c: " + c);
        } else {
            console.log("Середнє число b: " + b);
        }
    }
    


/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

    let dayOfWeek = 9;

    switch(dayOfWeek){
        case 1:
            console.log('Понеділок');
            break;
        case 2:
            console.log('Вівторок');
            break; 
        case 3:
            console.log('Середа');
            break;
        case 4:
            console.log('Четвер');
            break; 
        case 5:
            console.log('Пятниця');
            break; 
        case 6:
            console.log('Субота');
            break;
        case 7:
            console.log('Неділя');
            break; 
        default:
            console.log('Відстуні дані за таким номером');
            break;
    }

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

    let operationSymbol = "=";
    let num1 = 200;
    let num2 = 50;
    let result;

    switch (operationSymbol) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Невалідна операція");
            break;
    }

    console.log("Результат: " + result);



/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

    let word = "джаваскріптозалежний тестувальник"; 
    let endWord = word.replace(/[уеїіаоєяию]/gi, "");
    console.log(endWord); 

/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/


    let meters = 11000;
    let kilometers = meters / 1000;
    let meterEnding;
    let kilometerEnding;

    if(meters === Math.round(meters)){
    if (meters % 10 === 0 || meters % 10 >=5 || meters % 100 >= 11 && meters % 100 <= 19) {
        meterEnding = "метрів";
    }else if (meters % 10 === 1){
        meterEnding = "метр"
    }else if (meters % 10 >= 2 && meters % 10 < 5){
            meterEnding = "метри"
        }
    }else {
            meterEnding = "метра"
        }

    if(kilometers === Math.round(kilometers)){
    if (kilometers % 10 === 0 || kilometers % 10 >=5 || kilometers % 100 >= 11 && kilometers % 100 <= 19) {
        kilometerEnding = "кілометрів";
    }else if (kilometers % 10 === 1){
        kilometerEnding = "кілометр"
    }else if (kilometers % 10 >= 2 && kilometers % 10 < 5){
        kilometerEnding = "кілометри"
        }
    }else {
    kilometerEnding = "кілометра"
          }
          
    console.log(meters + " " + meterEnding + " це " + kilometers + " " + kilometerEnding);