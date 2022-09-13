// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let a = +prompt("введите число а");
let b = +prompt("введите число b");
let sum = a + b;
alert(sum);

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
    let a;

    do {
        a = +prompt("введите число а");
    } while (!isFinite(a));

    if (a === " " || a === null) {
        return null;
    }

    return a;
};

console.log(readNumber());

function readNumber() {
    let a = +prompt("введите число а");

    if (a === " " || a === null) {
        return null;
    } else {
        return a;
    };
};

console.log(readNumber());

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    return min + Math.random() * (max - min);
};

console.log(random(1, 5));