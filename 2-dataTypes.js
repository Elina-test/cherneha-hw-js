/*
Прості або примітивні:
-числа
-рядки (тект)
-логічний тип
-null
-undefined
-symbol
-big int

Об'єкти:
-спеціальні (глобальні)
    масиви
    функції
    об'єкт дати
    регульярні вирази
    помилки
-звичайні
    об'єкт (json {}) 
*/ 

let number = 5;
let floatNumber = 5.5;

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity
console.log('string'*3); //NaN (not a number)


let isExist = true; //or false

console.log(someVar);

let value = null; //конкретне значення
console.log(value);

let undef; //виведе undefined, коли змінну об'явили, але не встановили конкретне значення
console.log(undef);

let person = {
    name: 'Elina',
    age: 35
}

//let person1 = new Object(); // те ж саме, що і let obj = {};
//console.log(person1);
//person1.name = 'Fred';
//person1.age = 42;
//console.log(person1);

console.log(person.name);
console.log(person.age);

let arr = []; //масив - список, перелік


let arr1 = ['text', 6, {}, []]
console.log(arr1[1]); //вивести другий елемент масиву

let numArray = [1, 2, 3];
let numObj = {a:1, b:2, c:3};


let someArray = [1, 2, 3, 4];
let someArrayObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    qwe: 5
}

console.log(someArray[0])
console.log(someArrayObj[0])
console.log(someArrayObj['qwe'])


let rozetkaSearchAutocomplete = {
    "data": {
        "code": 1,
        "content": {
            "text": "noki",
            "changedText": "noki",
            "tpl_name": "one_plus_word",
            "records": {
                "words_additions": [
                    {
                        "name": "nokia c31 чехол",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+c31+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                    },
                    {
                        "name": "nokia flip",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+flip"
                    },
                    {
                        "name": "nokia 6310",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+6310"
                    },
                    {
                        "name": "nokia g21 чехол",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                    },
                    {
                        "name": "nokia g21",
                        "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21"
                    }
                ],
                "cats_searches": [
                    {
                        "id": "80037",
                        "top_id": "4627949",
                        "name": "в категорії <span class='bold'> Телевізори</span>",
                        "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80037&redirected=1",
                        "category_title": "Телевізори"
                    },
                    {
                        "id": "80027",
                        "top_id": "4627949",
                        "name": "в категорії <span class='bold'> Навушники</span>",
                        "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80027&redirected=1",
                        "category_title": "Навушники"
                    },
                    {
                        "id": "80003",
                        "top_id": "4627949",
                        "name": "в категорії <span class='bold'> Мобільні телефони</span>",
                        "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80003&redirected=1",
                        "category_title": "Мобільні телефони"
                    }
                ]
            },
            "count": 8,
            "total_count": 0,
            "page": 0,
            "start": 0,
            "sections_menu": [],
            "move_to_category": "Перейти в категорію",
            "price_with_promo": "Ціна з промокодом",
            "sudg_noth_to_find": "По вашому запиту нічого не знайдено. <nobr>Уточніть свій запит",
            "all_find_result": "Всі результати пошуку",
            "currency": "грн"
        }
    }

}

console.log(JSON.stringify('пошуковий запит: ' + rozetkaSearchAutocomplete.data.content.records.words_additions[0]))

console.log('пошуковий запит: ' + rozetkaSearchAutocomplete.data.content.text)
console.log('перший товар з пошукової видачі: ' + rozetkaSearchAutocomplete.data.content.records.words_additions[0].name)
console.log('перша категорія: ' + rozetkaSearchAutocomplete.data.content.records.cats_searches[0].name)
console.log('перша категорія: ' + rozetkaSearchAutocomplete.data.content.records.cats_searches[0].category_title)

let someText = " Hello World! "

console.log(someText.length);
console.log(someText.substring(1, 6)); //обрізає 
console.log(someText.toLocaleLowerCase());
console.log(someText.toLocaleUpperCase());
console.log(someText.indexOf('H'));
console.log(someText.trim()); //видаляє табуляцію, пробіли і т.д.
console.log(someText.charAt(1));
console.log(someText[1]);


let myArr = [];

myArr.push('Доброго')
myArr.push(' ')
myArr.push('вечора')

console.log(myArr)
console.log(myArr.length) //рахує скільки елементів в масиві
console.log(myArr.join(" ")) // об'єдная елементи масиву
console.log(myArr.pop())
console.log(myArr)

let someNumber = 12.43535;

console.log(someNumber.toFixed(1)) //округлить
console.log(Math.round(someNumber)) //округлить

let resolution = "12.2px"

console.log(parseInt(resolution)) //дістає числове значення - тільки цілу частину
console.log(parseFloat(resolution)) //дістає числове значення