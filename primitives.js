// // Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

// let a = +prompt("введите число а");
// let b = +prompt("введите число b");
// let sum = a + b;
// alert(sum);

// // Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// // Функция должна возвращать числовое значение.
// // Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

// function readNumber() {
//     let a;

//     do {
//         a = +prompt("введите число а");
//     } while (!isFinite(a));

//     if (a === " " || a === null) {
//         return null;
//     }

//     return a;
// };

// console.log(readNumber());

// function readNumber() {
//     let a = +prompt("введите число а");

//     if (a === " " || a === null) {
//         return null;
//     } else {
//         return a;
//     };
// };

// console.log(readNumber());

// // Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// // Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// function random(min, max) {
//     return min + Math.random() * (max - min);
// };

// console.log(random(1, 5));

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// function ucFirst(str) {
//     if (!str) {
//         return str;
//     }

//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("vasia"));

// let userName = "vasia";
// let userName2 = userName[0].toUpperCase() + userName.slice(1);
// console.log(userName2);

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

// function checkSpam(str) {
//     let checkedStr = str.toLowerCase();

//     if (checkedStr.includes("xxx") || checkedStr.includes("viagra")) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// function extractCurrencyValue(str) {
//     return str.slice(1);
// }

// console.log(extractCurrencyValue("$120"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, 
// чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + " ";
//     }
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));