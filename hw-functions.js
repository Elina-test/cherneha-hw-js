/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

    function foodAvailability(hamburgers, fries){

    if(hamburgers >= 4 && fries >= 1){
        console.log("Ми поїли")
    }
    else{
        console.log("Ми йдемо в інше кафе")
    }
    }

    foodAvailability(2, 2);

/*2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

    function checkPrice(productPrice){

    if (productPrice >= 1000 && productPrice <= 1900) {
        console.log("Значення ціни товару між 1000 та 1900");
    } else {
        console.log("Значення ціни товару не знаходиться між 1000 та 1900");
    }
    }
    checkPrice(2100);


/*3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/


    const checkPrice1 = (productPrice1) => {
    if (!(productPrice1 >= 1000 && productPrice1 <= 1900)) {
        console.log("Значення ціни товару не знаходиться між 1000 та 1900");
    } else {
        console.log("Значення ціни товару між 1000 та 1900");
    }
    }
    checkPrice1(900)


    const checkPrice2 = (productPrice2) => {

    if (productPrice2 < 1000 || productPrice2 > 1900) {
        console.log("Значення ціни товару не знаходиться між 1000 та 1900");
    } else {
        console.log("Значення ціни товару між 1000 та 1900");
    }
    }
    checkPrice2(1500)


/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/
    function checkSeason(seasonNum){
    let season;

    if (seasonNum === 1) {
        season = "Зима";
    } else if (seasonNum === 2) {
        season = "Весна";
    } else if (seasonNum === 3) {
        season = "Літо";
    } else if (seasonNum === 4) {
        season = "Осінь";
    } else {
        season = "Відсутні дані з таким номером";
    }
    return season;
}

    const resultSeason = checkSeason(2)
    console.log(resultSeason)

/*5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    function middleNum(a, b, c){

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
}
    middleNum(5, 6, 2)


/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

    function getDayOfWeek(dayOfWeek) {
        switch (dayOfWeek) {
            case 1:
                return 'Понеділок';
            case 2:
                return 'Вівторок';
            case 3:
                return 'Середа';
            case 4:
                return 'Четвер';
            case 5:
                return 'Пятниця';
            case 6:
                return 'Субота';
            case 7:
                return 'Неділя';
            default:
                return 'Відсутні дані за таким номером';
        }
    }
    
    let resultDay = getDayOfWeek(1);
    console.log(resultDay);

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

    function makeOperation(num1, num2, operationSymbol) {
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
            return;
    }
    console.log("Результат: " + result);
}
    makeOperation(5, 3, '=')




/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

    
    function removeVowels(word) {
        let endWord = word.replace(/[уеїіаоєяию]/gi, "");
        return endWord;
    }

    let resultWord = removeVowels("джаваскріптозалежний тестувальник");
    console.log(resultWord);

/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/


    let meters = 4;
    let kilometers = meters / 1000;

    function setEnding(value) {
    if(value === Math.round(value)){
    if (value % 10 === 0 || value % 10 >=5 || value % 100 >= 11 && value % 100 <= 19) {
        return "метрів";
    }else if (value % 10 === 1){
        return "метр"
    }else if (value % 10 >= 2 && value % 10 < 5){
        return "метри"
        }
    }else {
        return "метра"
        }

        }
    console.log(meters + " " + setEnding(meters) + " це " + kilometers + " кіло" + setEnding(kilometers));