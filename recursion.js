// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

const getSum = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    };
    return result;
}
console.log(getSum(5));

const getSum = (n) => (n == 1) ? 1 : n + getSum(n - 1);

console.log(getSum(5));

const getSum = (n) => n * (n + 1) / 2;

console.log(getSum(5));

// Вычислить факториал

const getFactorial = (n) => (n != 1) ? n * getFactorial(n - 1) : 1;

console.log(getFactorial(3));

// Числа Фибоначи

const getFibonaci = (n) => (n <= 1) ? n : getFibonaci(n - 1) + getFibonaci(n - 2);

console.log(getFibonaci(3));

// Вывод односвязного списка

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const getList = (list) => {
    console.log(list.value);

    if (list.next) {
        getList(list.next);
    }
}

console.log(getList(list));

// Список в обратном порядке

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};



const getList = (list) => {


    if (list.next) {
        getList(list.next);
    }
    console.log(list.value);
}

console.log(getList(list));