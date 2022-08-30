let browser;
if (browser === "Edge") {
    alert("You've got the Edge!")
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert("Okay we support these browsers too")
} else {
    alert("We hope that this page looks ok!");
}

const num = prompt("Введите число между 0 и 3", " ");
let numer = Number(num)
switch (numer) {
    case 0:
        alert("Вы ввели число 0");
        break;
    case 1:
        alert("Вы ввели число 1");
        break;
    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3");
        break;
    default:
        alert(" Неизвестное зеначение");
}

let num = prompt("Введите значение", " ");
console.log(typeof num);
let numer = Number(num);

switch (numer) {
    case 1:
        alert("Зима");
        break;
    case 2:
        alert("Весна");
        break;
    case 3:
        alert("Лето");
        break;
    case 4:
        alert("Осень");
        break;
    default:
        alert("Неправильное значение")
}