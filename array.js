// // Давайте произведём 5 операций с массивом.
// // Создайте массив styles с элементами «Джаз» и «Блюз».
// // Добавьте «Рок-н-ролл» в конец.
// // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// // Удалите первый элемент массива и покажите его.
// // Вставьте Рэп и Регги в начало массива.

let styles = ["Jaz", "Bluz"];
styles.push("Rock");
console.log(styles);

styles[Math.floor(styles.length / 2)] = "Classic";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap and Reggy");
console.log(styles);

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


function sumInput() {
    let num = [];
    while (true) {
        let a = +prompt("Введите число", 6);
        if (!a) break;
        num.push(a);
    }

    let sum = 0;
    for (let number of num) {
        sum += number;
    }
    return sum;
}
console.log(sumInput());

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.



function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumArr = 0;
        for (let j = i; j < arr.length; j++) {
            sumArr += arr[j];
            maxSum = Math.max(maxSum, sumArr);
        }
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));

// Напишите функцию camelize(str), которая преобразует строки вида« my - short - string» в« myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    return str
        .split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join(" ")
};

console.log(camelize("my-short-string"))

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше
// или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && b <= item));
}

console.log(arr);

let result = filterRange(arr, 1, 5);
console.log(result);

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a≤ arr[i]≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

console.log(filterRangeInPlace(arr, 1, 4));

// Сортировать по убыванию
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);

// У нас есть массив строк arr.Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort()
}

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

// Создайте функцию конструктор Calculator, которая создаёт« расширяемые» объекты калькулятора.

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let spliter = str.split(' '),
            a = +spliter[0],
            op = spliter[1],
            b = +spliter[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

}
let calc = new Calculator;

console.log(calc.calculate("3 - 9"));

// У вас есть массив объектов user, и в каждом из них есть user.name.Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name)

console.log(names);

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName– состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
    fullname: `${ user.name } ${ user.surname }`
}));

console.log(usersMapped[2]);

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr))

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

// Напишите функцию shuffle(array), которая перемешивает(переупорядочивает случайным образом) элементы массива.

let arr = [1, 2, 3];

function shuffle(arr) {
    arr.sort(() => Math.random());
}

shuffle(arr);
console.log(arr);
console.log(arr);
console.log(arr);

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    return arr.reduce((sum, arr) => sum + arr.age) / arr.age;
}

console.log(getAverageAge(arr))


function getAverageAge(arr) {
    return arr.reduce((sum, count) => sum + count.age, 0) / arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));

// Пусть arr– массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(strings) {
    let special = [];

    for (let str of strings) {
        if (!special.includes(str)) {
            special.push(str);
        }
    }
    return special;
}

console.log(unique(strings))

// Допустим, мы получили массив пользователей в виде { id: ..., name: ..., age: ... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
    return arr.reduce((object, users) => {
        object[users.id] = users;
        return object;
    })
}

let usersById = groupById(users);

console.log(usersById);



// ARRAYS ADDITION TASKS


// 0. С помощью цикла
// for сформируйте строку '123456789'
// и запишите ее в переменную str.

let str = " ";

for (let i = 1; i <= 10; i++) {
    str += i;
}

console.log(str);

// прочее

// let sum = "";
// let arr = [1, 2];

// function getSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(getSum(arr))

// let arr = [1, 3].reduce((sum, cost) => sum + cost);
// console.log(arr)

// 1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды должно быть 12 рядов:

let a = " ";
for (let i = 1; i <= 12; i++) {
    a += "*"
    document.write(a.toString() + "<br>");
};


// 2. С помощью двух вложенных циклов нарисуйте следующую пирамидку:

for (let i = 1; i < 10; i++) {
    document.write(i.toString().repeat(i) + "<br>");
};

// 3. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом

let a = " ";
for (let i = 1; i <= 12; i++) {
    a += "**"
    document.write(a.toString() + "<br>");
};


// 4. Пирамидка с цифрами

for (let i = 1; i < 10; i++) {
    document.write(i.toString().repeat(3) + "<br>");
};

// 5. Напишите функцию goThroughArray(list), которая проходится по массиву и выводит каждый элемент.

let list = "1,2,3"

function goThroughArray(list) {
    return list.split(",")
}

console.log(goThroughArray(list))

// 6. Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе.

let arr = ['a', 'b', 'c'];

let array = [1, 2, 3];

console.log(arr.concat(array));


// 7. Дан массив['a', 'b', 'c'].Добавьте ему в конец элементы 1, 2, 3.

let arr = ['a', 'b', 'c'];

console.log(arr.concat([1, 2, 3]));

// 8. Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);
console.log(arr);

// 9. Дан массив[1, 2, 3, 4, 5].С помощью метода splice запишите в новый массив элементы[2, 3, 4].

let arr = [1, 2, 3, 4, 5];

arr.splice(0, 1);
arr.splice(3);
console.log(arr);

// 10. Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b', 'c');
console.log(arr);

// 11. Дан массив[1, 2, 3, 4, 5].С помощью метода splice сделайте из него массив[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a', 'b');
console.log(arr);

arr.splice(6, 0, 'c');
console.log(arr);

arr.splice(8, 0, 'e');
console.log(arr);

// 12. Дан массив[3, 4, 1, 2, 7].Отсортируйте его.let arr = [3, 4, 1, 2, 7];

arr.sort((a, b) => a - b);

console.log(arr);

// 13. Дан объект { js: 'test', jq: 'hello', css: 'world' }.Получите массив его ключей.

let obj = {
    js: 'test',
    jq: 'hello',
    css: 'world',
};

console.log(Object.keys(obj));

// 14. Дана строка, например, '123456'.Переверните эту строку(сделайте из нее '654321') не используя цикл.

let str = "123456";

result = str.split("").reverse().join("");

console.log(result);

// 15. Дана строка.Сделайте заглавным первый символ этой строки не используя цикл.Найдите два решения
let str = "hello";

result = str[0].toUpperCase() + str.slice(1);

console.log(result);

// 16. Проверьте, что строка начинается на http: //.

let str = "https://docs.google.com/document/d/1EMA9Nm/edit";

console.log(str.split("//"));

let getResult = (str) => (str[0] === "http:");

console.log(getResult(str));

// 17. Проверьте, что строка заканчивается на.html

let str = " https://github.com/Kartynnikk/js.html";

let getResult = (str) => str.includes(".html");

console.log(getResult(str));

// 18. Дан массив с числами.Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

let num = [1, 2, 3, 4, 5];

let getResult = (num) => num.includes(5) ? console.log("YES") : console.log("NO");

console.log(getResult(num));

// 19. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

let num = 31;

for (let i = 2; i <= 30; i++) {

    (!(num % i === 0)) ? console.log("false"): console.log("true");
};

// 20. Дан массив с числами.Проверьте, есть ли в нем два одинаковых числа подряд.Если есть - выведите 'да', а если нет - выведите 'нет'

let arr = [1, 2, 2, 3, 4, 8, 8];

for (let i = 0; i < arr.length; i++) {

    arr[i] === arr[i + 1] ? console.log("Yes") : console.log("No");
};

// 21. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333'
// и так далее(два цикла)

function fillArray(num, count) {
    let arr = [];

    for (let i = 1; i <= count; i++) {

        for (let j = 1; j < i; j++) {
            arr[i].push();
        }
    }
    return arr;
}
console.log(fillArray(0, 5));

// неправильно

// let arr = [];

// for (let i = 0; i < 10; i++) {
//     let x = 'x'
//     arr[i].push()
// }

// 22. Дан массив чисел, найдите в нем максимальное число

let arr = [1, 2, 3, 8, 6];

console.log(Math.max.apply(null, arr));

// 23. Дан массив чисел, найдите в нем минимальное число

let arr = [1, 2, 3, 8, 6];

console.log(Math.min.apply(null, arr));


// 24. Дан массив чисел, найдите среднее арифметическое всех чисел

let arr = [1, 2, 3, 8, 6];

let getResult = (arr) => arr.reduce((sum, count) => sum + count) / arr.length;

console.log(getResult(arr));

// 25. Fill.Напишите функцию, которая заполняет новый массив предоставленным значением.


function fill(arraySize, value) {
    let arr = [];

    for (let i = 0; i < value; i++) {
        arr.push(arraySize)
    }
    return arr;
}

console.log(fill("a", 3));

// 26. Reverse.Напишите функцию, которая разворачивает массив в обратном порядке.Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

function reverse(array) {
    let arr = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);

    }
    return arr;
}

console.log(reverse(1, 2, 3));

// 27. compact.Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, 
// null.let str = [0, 1, false, 2, undefined, '', 3, null]

let compact = (str) => str.filter((item) => item);

console.log(compact(str));

// 28. From Pairs.Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов.
// Первое элемент массива - ключ, второй - зачение.(используем метод массива reduce)

function fromPairs(str, num) {
    if (Array.isArray(num)) {
        str[num[0]] = num[1]
    }
    return str;
};

console.log(fromPairs(["a", 1], ["b", 2]));

// 29. Without.Напишите функцию, возвращает новый массив без предоставленных значений.Используйте примитивные типы.

function without(arr, argument) {
    let result = [arr];

    for (let i = 1; i < argument.length; i++) {
        result = result.filter((item) => item !== argument[i])
    }
    return result;
}

console.log(without(1, 2, 3, 5, 5, 6, 2));

// 30. Unique.Напишите функцию, которая убирает повторяющиеся значения.

let arr = [1, 2, 3, 5, 5, 6, 8, 8];

let unique = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

console.log(unique(arr));

// 31.isEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

let isEqual = (arr1, arr2) => arr1.length === arr2.length ? true : false;

console.log(isEqual([1, 2, 3], [1, 2, 3]));