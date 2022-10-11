// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

const getUniqueValue = (values) => [
    const set = new Set(values);
    return Array.from(set);
]

console.log(getUniqueValue(["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
]));

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.


const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    const map = new Map();

    for (let word of arr) {
        const result = word.toLowerCase().split("").sort().join("");
        map.set(result, word);
    }
    return Array.from(map.values());
}

console.log(aclean(arr));

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

const map = new Map();
map.set("name", "John");

const keys = Array.from(map.keys());
keys.push("more");

console.log(keys);

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => Object.values(salaries).reduce((sum, count) => sum + count);

console.log(sumSalaries(salaries));

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

const user = {
    name: 'John',
    age: 30
};

const getCount = (user) => Object.keys(user).length;

console.log(getCount(user));

// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

const user = {
    name: "John",
    years: 30,
};

const { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary(salaries) {
    const maxSalary = 0;
    const salaryName = null;

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

const num = [1, 3, 5, 8, 9, 12];
num.sort((a, b) => a - b);

console.log(num);


const num = [1, 3, 5, 8, 9, 12];
num.sort((a, b) => b - a);

console.log(num);