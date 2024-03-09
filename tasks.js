// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

const logins = ["Ajax", "Mango", "Poly"];
const str = prompt("Введіть логін");


function checkLoginf(logins, str) {
    return logins.includes(str) ? "Доступ дозволено" : "Доступ не дозволено";
}

console.log(checkLoginf(logins, str));


// *********
// Напишіть функцію min(a,b), яка повертає менше чисел з a і b.

function min(a,b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}


console.log(min(10, 1000));


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
console.log(styles.shift());
styles.unshift("Реп", "Реггі");
console.log(styles);

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
console.log(findSmallerNumber(numbers));

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

console.log(caclculateAverage(5, 10, 15, "Hello"));