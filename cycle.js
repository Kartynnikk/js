for (let n = 2; n <= 10; n++) {
    if (n % 2 == 0) {
        console.log(n);
    }
}

let n = 0;
while (n < 3) {
    alert(`number ${n}!`);
    n++;
}

let n;
do {
    n = prompt("Введите число больше 100", 0);
}
while (n <= 100 && n) {
    alert(n);
}

let n = 10;
NextPrime:
    for (let a = 2; a <= n; a++) {
        for (let b = 2; b < a; b++) {
            if (a % b == 0) continue NextPrime;
        }
        alert(a);
    }

let n = 1;
while (n <= 50) {
    alert(n);
    n++
}

for (let n = 1; n <= 50; n++) {
    alert(n);
}

let n = 1;
while (n <= 100) {
    alert(n);
    n++
}

for (let n = 1; n <= 100; n++) {
    alert(n);
}

let n = 11;
while (n <= 33) {
    alert(n);
    n++
}

for (let n = 11; n <= 33; n++) {
    alert(n);
}


for (let n = 0; n <= 100; n++) {
    if (n % 2 == 0) {
        alert(n);
    }
}


let sum = 0;
for (let n = 0; n <= 100; n++) {
    sum += n;
}
alert(sum);


let a = 1000,
    n = 0;
while (a >= 50) {
    a = a / 2;
    n++;
}
console.log("Итераций: " + n + ", получилось число " + a);

// let n = 0;
// for (let a = 1000; a >= 50; a / 2) {
//     n++
// }
// console.log("Итераций: " + n + ", получилось число " + a);