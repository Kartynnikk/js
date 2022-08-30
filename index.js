let nameJavaScript = prompt("Какое официальное название JavaScript ?");
if (nameJavaScript === "ECMAScript") {
    alert('True');
} else {
    alert('Не знаете? ECMAScript!');
}


let number = +prompt("Введите число", 0);
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


let sum = (a + b < 4) ? "Мало" : "Много";

let sum = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
    (login === '') ? 'Нет логина' : '';


let number = +prompt(" Чему равна переменная а? ", 0);
if (number === 10) {
    alert("True");
} else {
    alert("False")
}



let min = +promt(" Введите число", 15);
if (min >= 0 && min < 15) {
    alert(" Первая часть ");
} else if (min > 15 && min < 30) {
    alert(" Вторая часть ");
} else if (min > 30 && min < 45) {
    alert(" Третья часть ");
} else if (min > 45 && min < 60) {
    alert(" Четевертая часть ");
}



let a = promt(" ");
let result = (!a) ? " Верно " : " Неверено ";


let a = promt(" ");
let result = (a > 0) ? " Верно " : " Неверено ";



// let name = "John",
//     admin = name;
// alert(admin);

// let currentUserName = "Jogh",
//     ourSpaceName = "Earth";
// console.log(currentUserName, ourSpaceName);

// let userName = "John";
// console.log(typeof userName);
// alert(`hello ${userName}`);

// let userAge = prompt(" Сколько тебе лет?", 25);
// alert(userAge);

// let message = confirm(" Are you my boss ?");
// alert(message);

// let a = prompt("Первое число?", 1),
//     b = prompt("Второе число?", 2);
// alert(+a + +b);