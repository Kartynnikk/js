// // Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let a = +prompt("введите число а");
let b = +prompt("введите число b");
let sum = a + b;
alert(sum);

// // Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// // Функция должна возвращать числовое значение.
// // Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
    let a;

    do {
        a = +prompt("введите число а");
    } while (!isFinite(a));

    (a === " " || a === null) ? null: a;

    //     if (a === " " || a === null) {
    //         return null;
    //     }

    //     return a;
    // };

    console.log(readNumber());

    function readNumber() {
        let a = +prompt("введите число а");

        (a === " " || a === null) ? null: a;

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

    let userName = "vasia";
    let userName2 = userName[0].toUpperCase() + userName.slice(1);
    console.log(userName2);

    // Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
    // Функция должна быть нечувствительна к регистру:

    function checkSpam(str) {
        let checkedStr = str.toLowerCase();

        true ? true : false;

        // if (checkedStr.includes("xxx") || checkedStr.includes("viagra")) {
        //     return true;
        // } else {
        //     return false;
        // }
    }
    console.log(checkSpam('buy ViAgRA now'))
    console.log(checkSpam('free xxxxx'))
    console.log(checkSpam("innocent rabbit"))

    // Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
    // Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

    let extractCurrencyValue = (str) => str.slice(1);



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

    let str = ["hello", "world", "it`s", "me"];

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

    // 1. Дана строка 'frontent$developer$wow. Замените все $ на * с помощью глобального поиска и замены.  

    let str = "frontent@developer@wow";
    console.log(str.replace(/@/g, " "));


    // 2. Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.

    let str = "I am learning frontend development";

    function convertStringToArray(str) {
        return str.split(" ");
    }

    console.log(convertStringToArray(str));

    // 3. Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

    let str = ["t", "e", "s", "t"];
    console.log(str.length)

    function removeSymbols(str, length) {
        let a = prompt("Введите слово");
        return str.slice(0, a.length);
    }

    console.log(removeSymbols(str));

    // 4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет тире(-) между словами.
    // При этом все символы строки необходимо перевести в верхний регистр.

    let str = "I am learning frontende development";

    function pasteDashesIntoString(str) {
        return str.toUpperCase().replace(/\s/g, "-");
    }

    console.log(pasteDashesIntoString(str));

    // 5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и переводит в нижний регистр.

    function makeStringLowerCased(str) {
        return str.toLowerCase();
    }

    console.log(makeStringLowerCased("I AM LEARNING FRONTENDE DEVELOPMENT"));

    // 6. Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.


    function capitaliseAllWords(str) {
        return str.replace(/(^|\s)\S/g, function(upper) { return upper.toUpperCase() });
    }

    console.log(capitaliseAllWords("list style image"))

    // 7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и делает первую букву заглавной.

    function makeFirstLetterUpperCased(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    console.log(makeFirstLetterUpperCased("list style image"));

    // 8. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный.
    // Например, если вводится« Я иЗуЧаЮ ФрОнТеНд», то на выходе должно быть« я ИзУчАю ФрОнТеНд».


    function changeLetterRegister(str) {
        let new_str = "";

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i].toLowerCase()) {
                new_str += str[i].toUpperCase();
            } else {
                new_str += str[i].toLowerCase();
            }
        }
        return new_str;
    }

    console.log(changeLetterRegister("ПрИвЕт"));

    // 9. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и делает в ней все символы разного регистра по порядку.
    // Например, если вводится« джаваскрипт», то на выходе должно быть« дЖаВаСкРиПт».


    function changeLetterRegister(str) {

        let result = " ";

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
        let result = len - num.length
        console.log(result);

        for (let i = 0; i < result; i++) {
            num += 0;
        }

        return (sign = "+") ? sign + num : num;
    }

    console.log(addZeros("125", 5, "+"));



    // ВТОРОЙ ВАРИАНТ


    function addZeros(num, len, sign) {

        let result = len - num.length;
        console.log(result);


        let arr = new Array(result);

        arr.fill(0);

        console.log(arr);

        console.log(arr.join(""));


        return (sign = "+") ? sign + num + arr : num;
    };

    console.log(addZeros("125", 5, "+"));



    // 11. Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.

    function compareStrings(str1, str2) {
        let result = str1.toUpperCase() === str2.toUpperCase();

        return result;
    }

    console.log(compareStrings("string", "StRiNg"));

    // 12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

    function repeatStr(str, n) {

        return str.repeat(n);
    }

    console.log(repeatStr(" Hello", 5));

    function repeatStr(str, n) {
        let strNumber = " ";

        for (let i = 0; i < n; i++) {
            strNumber += str;
        }
        return strNumber;
    }
    console.log(repeatStr(" Hello", 5));

    // 13. Напишите функцию getPathname(pathname), которая находит имя файла(подстрока после последнего символа "\" ) из полного пути к файлу.

    let pathname = "/home/user/landing/index.js";

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