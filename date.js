// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

const dat = new Date(2022, 1, 22, 3, 12);

console.log(dat);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

const date = new Date(2014, 0, 3);

const getWeekDay = (date) => {
    const day = ["SAN", "MON", "TUE", "WED", "TRU", "FRI", "SAT"];
    return day[date.getDate()];
}

console.log(getWeekDay(date));

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

const date = new Date(2012, 0, 3);

const getLocalDay = (date) => {
    const day = [1, 2, 3, 4, 5, 6, 7];
    return day[date.getDate()];
}

console.log(getLocalDay(date));

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

const getDateAgo = (date, days) => {
    const lastDate = new Date(date);

    lastDate.setDate(date.getDate() - days)
    return lastDate;
}

const date = new Date(2022, 09, 10);

console.log(getDateAgo(date, 2));

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

const getLastDayOfMonth = (year, month) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2022, 1));

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10: 00, и не было перехода на зимнее / летнее время, то:

const getSecondsToday = () => {
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const difference = now - today;

    return Math.round(difference / 1000);
}

console.log(getSecondsToday());

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:

const getSecondsToTomorrow = () => {
    const now = new Date();

    const tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    const difference = tommorow - now;

    return Math.round(difference / 1000);
}

console.log(getSecondsToTomorrow());



// JSON

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

const user = {
    name: "Василий Иванович",
    age: 35
};

const customer = JSON.stringify(user);

console.log(customer);

const purchaser = JSON.parse(JSON.stringify(user));

console.log(purchaser);

// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

const room = {
    number: 23
};

const meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}))





// CLOSURE

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

const getSum = (a) => function(b) {
    return a + b;
}

console.log(getSum(1)(2));


// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

const arr = [1, 2, 3, 4, 5, 6, 7];

function inArray(arr) {
    return function(a) {
        return arr.includes(a);
    };
}

console.log(arr.filter(inArray([1, 2, 10])));


function inBetween(a, b) {
    return function(c) {
        return c >= a && c <= b;
    };
}

console.log(arr.filter(inBetween(3, 6)));


// У нас есть массив объектов, который нужно отсортировать:

const users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));