let age = prompt("Какой у вас возраст?", 25);
if (age >= 14 && age <= 90) {
    alert("Включительно");
};

let age = prompt("Какой у вас возраст?", 25);
if (!(age >= 14 && age <= 90)) {
    alert("НЕ Включительно");
};

let login = prompt("Кто там?");
if (login === "Админ") {
    let password = prompt("Пароль?");
    if (password === "Я главный") {
        alert("Здравствуйте")
    } else if (password) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (login) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
};

let a = prompt(" Введите значение переменной а");
if (a > 0 && a < 5) {
    alert("True");
} else {
    alert("False");
};

let a = prompt(" Введите значение переменной а");
if (!a || a === 2) {
    alert(a + 7);
} else {
    alert(a / 10);
};

let a = prompt(" Введите значение переменной а");
let b = prompt(" Введите значение переменной b");
if (a <= 1 && b >= 3) {
    alert(a + b);
} else {
    alert(a - b);
};

let a = prompt(" Введите значение переменной а");
let b = prompt(" Введите значение переменной b");
if (a >= 2 && a <= 11 || b >= 6 && b <= 14) {
    alert("Верно");
} else {
    alert("Неверно");
};