// 21. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333'
// и так далее(два цикла)

// function fillArray(num, count) {
//     const arr = [];

//     for (let i = 1; i <= count; i++) {
//         for (let j = 1; j < i; j++) {
//             arr.push(num);
//         }
//     }
//     return arr;
// }

// console.log(fillArray(0, 5));

// неправильно

// let arr = [];

// for (let i = 0; i < 10; i++) {
//     let x = 'x'
//     arr[i].push()
// }

const arr = [];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        arr.push(i) * j;
    }
}

console.log(arr);