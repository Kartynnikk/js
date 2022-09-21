// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

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