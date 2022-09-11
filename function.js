// // // Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// // // Сделайте два варианта функции checkAge:
// // // Используя оператор ?
// // // Используя оператор ||

// function checkAge(age) {
//     return (age >= 18) ? true : confirm("Родители разрешили?")
// };

// function checkAge(age) {
//     return (age >= 18) || confirm("Родители разрешили?")
// };

// function checkAge(age) ? () => true: () confirm("Родители разрешили?");


// // // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function getMin(a, b) {
//     return (a < b) ? a : b
// };

// // Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// function getVar(a, b) {
//     if (a > b) {
//         return 1;
//     } else(b > a) {
//         return -1;
//     };
// }
// console.log(getVar(2, 3));

// let getVar = (a, b) => {
//     return (a > b) ? 1 : (b > a) ? -1
// };

// // Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и 
// // вычисляет его площадь.Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.

// function getSquare(length, width = l) {
//     if (length >= 0 && width >= 0) ?
//         return length * width: "Mistake";
// };
// console.log(getSquare(5, 2));
// console.log(getSquare(10));
// console.log(getSquare(10, "w"));

// // Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. 
// // Если оба числа нечётные - функция возвращает их сумму.
// // Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// function getResult(a, b) {
//     if (!(a % 2) && !(b % 2)) {
//         return a * b;
//     } else if ((a % 2) && (b % 2)) {
//         return a + b;
//     } else if (!(a % 2) || (b % 2)) {
//         return b;
//     } else if (!(b % 2) || (a % 2)) {
//         return a;
//     }
// }

// console.log(getResult(5, 8));
// console.log(getResult(7, 9));
// console.log(getResult(8, 10));

// // Написать функцию, которая принимает 1 аргумент (возраст пользователя)
// // и возвращает boolean значение  - можно ему на сайт или нет.( если 18 и больше лет)

// function getAge(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return "Not access"
//     }
// }

// let age = prompt(" Введите свой возраст");

// alert(getAge(age));


// // Написать функцию, которая принимает 3 аргумента, если 1 аргумент true.
// // то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы

// function getVar(a, b, c) {
//     if (a) {
//         return b + c;
//     } else {
//         return b - c;
//     }
// }

// console.log(getVar(0, 5, 10));

// // Написать функцию, которая принимает 1 аргумент(кол - во итераций цикла)
// // и выводит на страницу столько красных кругов на страницу


// function whrite(a) {

//     for (let i = 0; i < a; i++) {
//         const circle = document.createElement("div");
//         circle.style.backgroundColor = "red";
//         circle.style.width = "50px";
//         circle.style.height = "50px";
//         circle.style.border = "1px solid red";
//         circle.style.borderRadius = "50%";
//         circle.style.marginBottom = "15px";
//         console.log(i);
//         document.body.appendChild(circle);
//     }
// };

// console.log(whrite(10));


// Напишите функцию, которая принимает произвольное количество аргументов в виде строк и выводит их через пробел с помощью document.write()
// в тело html - документа.Например, функция showWords("I've", "been", "learning", "JavaScript", "for", "a", "month")
// должна вывести фразу "I've been learning JavaScript for a month".


function showWords() {
    let sum = " ";
    for (let i = 0; i <= arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
}
console.log(showWords("I have been", " learning", " JavaScript", " for", " a month"));

// Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел 
// и возвращает 1 многозначное число. 
// Например, функция с именем complexDigit() при вызове  complexDigit(3,6,7) 
// вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.

function complexDigit() {
    let sum = " ";
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Задача 3

console.log(complexDigit("5", "2", "3"));

function calculate() {
    let sum = " ";
    for (let i = 0; i <= arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(calculate("123", "12345"));