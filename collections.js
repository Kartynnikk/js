// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(values) {

    let set = new Set(values);


    return Array.from(set);
}

console.log(unique(["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]));

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    let map = new Map();

    for (let word of arr) {
        let result = word.toLowerCase().split("").sort().join("");
        map.set(result, word);
    }
    return Array.from(map.values());
}

console.log(aclean(arr));

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

console.log(keys);

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, count) => sum + count);
}

console.log(sumSalaries(salaries));

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};

function count(user) {
    return Object.keys(user).length;
}

console.log(count(user));

// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
    name: "John",
    years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary(salaries) {

    let maxSalary = 0;
    let salaryName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            salaryName = name;
        }
    }
    return salaryName;
}

console.log(topSalary(salaries));

// перечитать что за метод сорт и что мы в него ПЕРЕДАЕМ, 
// написать 2 функции для сортировки - от большего к меньшему и наоборот

let num = [1, 3, 5, 8, 9, 12];

num.sort((a, b) => a - b);

console.log(num);



let num = [1, 3, 5, 8, 9, 12];

num.sort((a, b) => b - a);

console.log(num);