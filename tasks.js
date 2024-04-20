// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

const logins = ["Ajax", "Mango", "Poly"];
// const str = prompt("Введіть логін");


function checkLoginf(logins, str) {
    return logins.includes(str) ? "Доступ дозволено" : "Доступ не дозволено";
}

// console.log(checkLoginf(logins, str));


// *********
// Напишіть функцію min(a,b), яка повертає менше чисел з a і b.

function min(a,b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}


// console.log(min(10, 1000));


/////////// ********************/////////
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-рол");
const findIndex = styles.indexOf("Блюз");
if (findIndex !== -1) {
    styles.splice(findIndex, 1, "Класика");
}
// console.log(styles.shift());
styles.unshift("Реп", "Реггі");
// console.log(styles);

/////////// ********************/////////
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

// const logins = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//     }
// }

/////////// ********************/////////

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallerNumber(numbers) {
    let smallerNumber = numbers[0];
    for (const number of numbers) {
        if (number < smallerNumber) {
            smallerNumber = number;
      }
    }
    return smallerNumber;
}

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallerNumber(numbers));

/////////// ********************/////////

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function caclculateAverage(...args) {
    let summ = 0;
    let count = 0;
    for (const arg of args) {
        if (typeof arg === "number") {
            summ += arg;
            count++;
        }
      
    } 
    return summ / count
}

// console.log(caclculateAverage(5, 10, 15, "Hello"));

//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додати поле mood зі значенням 'happy'
//2 замінити hobby на 'skydiving'
//3 замінити значення premium на false
//4 виводити вміст об'єкта user у форматі
//ключ:значення використовуючи Object.keys() і for...of

// const user = {
// name: "John",
// age: 20,
// hobby: "tenis",
// premium: true,
// };

// user.mod = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`)
// }


//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

const stones = [
{ name: "Смарагд", price: 1300, quantity: 4 },
{ name: "Діамант", price: 2700, quantity: 6 },
{ name: "Сапфір", price: 400, quantity: 7},
{ name: "Щебінь", price: 150, quantity: 100 },
];

const calcTotalPrice = (stones, stonesName) => {
    // stones.length = 0
    for (const stone of stones) {
        if (stone.name === stonesName) {
            return stone.price * stone.quantity;
        }
    }
return `${stonesName} was not found`
}

// console.log(calcTotalPrice(stones, "Смарагд"))

// console.log(stones)

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

const products = [];
const makeProduct = (name, price, callback) => {
    const product = {
        name,
        price,
        id: Math.random(),
    }
    callback(product)
}

const showProduct = (product) => {
    console.log(product);
    products.push(product);
}

makeProduct("Iphone", 1000, showProduct)
console.log(products)