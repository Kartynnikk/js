for (let n = 2; n <= 10; n++) {
    if (!(n % 2)) {
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
outer:
    for (let a = 2; a <= n; a++) {
        for (let b = 2; b < a; b++) {
            if (!(a % b)) continue outer;
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
    if (!(n % 2)) {
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
    a /= 2;
    n++;
}
console.log("Итераций: " + n + ", получилось число " + a);

// let n = 0;
// for (let a = 1000; a >= 50; a / 2) {
//     alert(n++)
// }
// console.log("Итераций: " + n + ", получилось число " + a);

let n = 1;
while (n < 100) {
    alert(n);
    n++
}

for (let n = 11; n < 33; n++) {
    alert(n);
}

for (let n = 1; n < 100; n++) {
    if (!(n % 2)) {
        alert(n);
    }
}

let arr = [1, 2, 3, 4, 5];
alert(arr);

let sum;
while (true) {
    let value = prompt("Введите число");
    if (value >= 100) break;
    sum += value;
}
alert(sum);

let arr = [1, 2, 3, 4, 5];
let result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
alert(result);

let a = 4;
while (a <= 400) {
    alert(a);
    a++
};

let a = 4;
while (a <= 400) {
    console.log(a);
    a++
};

let a = 4;
while (a <= 13) {
    console.log(a);
    a + 3;
};

let a = 654;
while (!a) {
    console.log(a);
    a--;
};

let a = -4;
while (a <= 100) {
    console.log(a);
    a + 2;
};

for (let a = 1; a <= 10; a++) {
    console.log(a * 7);
};

for (let a = 1000; a <= 2000; a++) {
    console.log("&" + "#" + a);
};