console.log('Запит даних з серверу');

setTimeout(() => {
    console.log('Підготовка даних для відповіді сервера...');

    const product = {
        name: "Laptop",
        price: 10000,
    }

    setTimeout(() => {
        product.status = "inStock";
        console.log(product)
    }, 2000)
}, 5000)


const request = new Promise((resolve, reject) => {})

const request2 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу');

setTimeout(() => {
    console.log('Підготовка даних для відповіді сервера...');

    const product = {
        name: "Laptop",
        price: 10000,
    }

    setTimeout(() => {
        product.status = "inStock";
        console.log(product)
    }, 2000)
}, 5000)
})


const request3 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу');

setTimeout(() => {
    console.log('Підготовка даних для відповіді сервера...');

    const product = {
        name: "Laptop",
        price: 10000,
    }

    // setTimeout(() => {
    //     product.status = "inStock";
    //     console.log(product)
    // }, 2000)
    resolve()
}, 5000)
})

request3.then(() => {
    console.log('Дані отримані')
})



const request4 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу');

setTimeout(() => {
    console.log('Підготовка даних для відповіді сервера...');

    const product = {
        name: "Laptop",
        price: 10000,
    }

    resolve(product)
}, 5000)
})

request4.then((someProduct) => {
    setTimeout(() => {
    someProduct.status = "inStock";
    console.log(someProduct)
     }, 2000)
})



let statusCode = 300;

const request5 = new Promise((resolve, reject) => {
    console.log('Запит даних з серверу');

setTimeout(() => {
    console.log('Підготовка даних для відповіді сервера...');

    const product = {
        name: "Laptop",
        price: 10000,
    }

    if(statusCode != 200){
        reject(statusCode)
    }

    resolve(product)
}, 5000)
})

request5.then((someProduct) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            someProduct.status = "inStock";
            resolve(someProduct)
             }, 2000)
    })
}).then(data => {
    data.isModified = true;
    return data
}).then(data => {
    console.log(value[0])
}).catch(error =>{
    console.log(error)
}).finally(() => {
    console.log('Finally block')
})


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        fetch('https://jsonplaceholder.typicode.com/posts/${json.id + 1}')
            .then((response) => response.json())
            .then((json) => console.log(json))
    });