let day = prompt("Введите день", " ");
let dayX = Number(day)
if (dayX >= 1 && dayX <= 10) {
    alert("Первая декада")
} else if (dayX >= 11 && dayX <= 20) {
    alert("Вторая декада")
} else {
    alert(" Третья декада")
}

let month = prompt("Введите число", " ");
let monthX = Number(month);
switch (monthX) {
    case 1:
    case 2:
    case 12:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осень");
        break;
    default:
        alert("Неверное значение");
}

let str = "abcde";
console.log(typeof str);
if (str[0] === "a") {
    alert("Yes");
} else {
    alert("No");
}

let num = "12345";
if (num[0] === "1" || num[0] === "2") {
    alert("Yes")
} else {
    alert("No")
}

let a = "123";
let c = +a[0] + +a[1] + +a[2];
alert(c)

let a = "123456";
let b = (+a[0] + +a[1] + +a[2]);
let d = (+a[3] + +a[4] + +a[5]);
if (b === d) {
    alert("True");
} else {
    alert("False");
}