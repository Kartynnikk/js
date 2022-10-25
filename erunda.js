// function getSum(n) {
//     return function(m) {
//         return n + m;
//     }
// }

// const sum = getSum(25);


// console.log(sum(5))

// function multiple() {
//     return m * multiple()
// }

// console.log(multiple(5))

function multiple(n) {
    return (n != 1) ? n * multiple(n - 1) : 1;
}


console.log(multiple(4))