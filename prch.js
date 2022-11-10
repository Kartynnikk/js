// const getSum = (n) => n !== 1 ? n + getSum(n - 1) : 1;

// console.log(getSum(100))

// Задание: бинарный поиск

const arr = [1, 8, 2, 6, 21, 17];

const arr2 = arr.sort((a, b) => a - b);

console.log(arr2);

const getResult = (num, target) => {
    let left = 0;
    let rigth = num.length - 1;
    let midle;

    while (left >= rigth) {
        midle = Math.round((rigth - left) / 2 + left);

        return (num[midle] === target) ? midle : (target <= num[midle]) ? rigth = midle - 1 : left = midle + 1;
    }
    return -1;
}

console.log(getResult(arr2, 2));