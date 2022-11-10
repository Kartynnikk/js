// // Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

const a = +prompt("введите число а");
const b = +prompt("введите число b");
const sum = a + b;
alert(sum);

// // Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// // Функция должна возвращать числовое значение.
// // Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
    const a;

    do {
        a = +prompt("введите число а");
    } while (!isFinite(a));

    (!a) ? null: a;
}
// (a === " " || a === null) ? null: a;

//     if (a === " " || a === null) {
//         return null;
//     }

//     return a;
// };

console.log(readNumber());

function readNumber() {
    const a = +prompt("введите число а");

    (!a) ? null: a;

    // if (a === " " || a === null) {
    //     return null;
    // } else {
    //     return a;
    // };
};

console.log(readNumber());

// // Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// // Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    return min + Math.random() * (max - min);
};

console.log(random(1, 5));

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    if (!str) {
        return str;
    }

    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("vasia"));

const userName = "vasia";
const userName2 = userName[0].toUpperCase() + userName.slice(1);
console.log(userName2);

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
    const checkedStr = str.toLowerCase();

    (checkedStr.includes("xxx") || checkedStr.includes("viagra")) ? true: false;
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => str.slice(1);



console.log(extractCurrencyValue("$120"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, 
// чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + " ";
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// STRINGS

// 0. Напишите функцию logAllChars(str), которая принимает str в качестве аргумента и
// выводит каждый символ строки в логи.

const str = "hello, world, it`s, me";
str.toString()
    .split(",");
console.log(str);

// 1. Дана строка 'frontent$developer$wow. Замените все $ на * с помощью глобального поиска и замены.  

const str = "frontent$developer$wow";
console.log(str.replace(/$/g, "*"));


// 2. Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.

const str = "I am learning frontend development";

function convertStringToArray(str) {
    return str.split(" ");
}

console.log(convertStringToArray(str));

// 3. Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

const str = ["t", "e", "s", "t"];
console.log(str.length)

function removeSymbols(str, length) {
    let a = prompt("Введите слово");
    return str.slice(0, a.length);
}

console.log(removeSymbols(str));

// 4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет тире(-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.

const str = "I am learning frontende development";

function pasteDashesIntoString(str) {
    return str.toUpperCase().replace(/\s/g, "-");
}

console.log(pasteDashesIntoString(str));

// 5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и переводит в нижний регистр.

const makeStringLowerCased = (str) => str.toLowerCase();

console.log(makeStringLowerCased("I AM LEARNING FRONTENDE DEVELOPMENT"));

// 6. Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.


const capitaliseAllWords = (str) => str.replace(/(^|\s)\S/g.toUpperCase());


console.log(capitaliseAllWords("list style image"))

// 7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и делает первую букву заглавной.

const makeFirstLetterUpperCased = (str) => str[0].toUpperCase() + str.slice(1);

console.log(makeFirstLetterUpperCased("list style image"));

// 8. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный.
// Например, если вводится« Я иЗуЧаЮ ФрОнТеНд», то на выходе должно быть« я ИзУчАю ФрОнТеНд».


function changeLetterRegister(str) {
    const str1 = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            str1 += str[i].toUpperCase();
        } else {
            str1 += str[i].toLowerCase();
        }
    }
    return str1;
}

console.log(changeLetterRegister("ПрИвЕт"));

// 9. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и делает в ней все символы разного регистра по порядку.
// Например, если вводится« джаваскрипт», то на выходе должно быть« дЖаВаСкРиПт».


function changeLetterRegister(str) {
    const result = " ";

    for (let i = 0; i < str.length; i++) {
        result += i % 2 == 0 ? str[i].toUpperCase() : str[i];
    };
    return result;
}

console.log(changeLetterRegister("джаваскрипт"));

// 10. Напишите функцию addZeros(num, len, sign), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком« + »
//     или« - «в зависимости от передаваемого аргумента.


function addZeros(num, len, sign) {
    console.log(num.length);
    console.log(num);
    const result = len - num.length;
    console.log(result);

    for (let i = 0; i < result; i++) {
        num += 0;
    }

    return (sign === "+") ? sign + num : num;
}

console.log(addZeros("125", 5, "+"));



// ВТОРОЙ ВАРИАНТ


function addZeros(num, len, sign) {

    const result = len - num.length;
    console.log(result);


    const arr = new Array(result).fill(0);

    console.log(arr);

    console.log(arr.join(""));

    return (sign === "+") ? sign + num + arr : num;
};

console.log(addZeros("125", 5, "+"));



// 11. Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.

const compareStrings = (str1, str2) => result = str1.toUpperCase() === str2.toUpperCase();


console.log(compareStrings("string", "StRiNg"));

// 12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

function repeatStr(str, n) {

    return str.repeat(n);
}

console.log(repeatStr(" Hello", 5));

function repeatStr(str, n) {
    const strNumber = " ";

    for (let i = 0; i < n; i++) {
        strNumber += str;
    }
    return strNumber;
}
console.log(repeatStr(" Hello", 5));

// 13. Напишите функцию getPathname(pathname), которая находит имя файла(подстрока после последнего символа "\" ) из полного пути к файлу.

const pathname = "/home/user/landing/index.js";

function getAverageAge(pathname) {
    return pathname
        .split("/")
        .pop()
}

console.log(getAverageAge(pathname));

// 14. Напишите функцию getSubstring(str, char, pos), которая возвращает часть строки,
// расположенную после или до указанного символа char в зависимости от параметра pos.

const str = "Javascript — синхронный язык программирования";

function getAverageAge(str, char, pas) {

    if (pas === "after") {
        return str
            .split(" ")
            .slice(2)
            .join(" ")
    } else if (pas === "before") {
        return str
            .split(" ")
            .slice(0, 4)
            .join(" ")
    } else {
        return str;
    }
}

console.log(getAverageAge(str, "—", "after"));
console.log(getAverageAge(str, 'язык', 'before'));
console.log(getAverageAge(str, 'язык', ' '));