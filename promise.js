// Задание из видео

console.log("Request data");

const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Process data");

            const obj = {
                name: "Ksenia",
                surname: "Kartynnik",
                age: 23,
            }
            resolve(obj);
        }, 1000)
    })
    .then(data => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                data.university = "BGEU";
                resolve(data);
            }, 1000)
        })
    }).then((localData) => {
        console.log("Recieved data :", localData);
    })


// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
// так чтобы мы могли добавить к нему 

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve())
    }, ms)
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));


// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, 
// вместо того чтобы принимать в аргументы функцию-callback.

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    showCircle(150, 150, 100).then(circle => {
        circle.classList.add('message-ball');
        circle.append("Hello, world!");
    })
})

const showCircle = (top, left, radius) => {
    const circle = document.createElement("div");
    circle.className = "сircle";
    circle.style.width = "0";
    circle.style.height = "0";
    circle.style.left = left + "px";
    circle.style.top = top + "px";
    document.body.append(circle);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            circle.style.width = radius * 2 + "px";
            circle.style.height = radius * 2 + "px";
            circle.style.border = "2px";
            circle.style.border = "red";
            circle.style.borderStyle = "solid";
            circle.style.padding = "100px";
            circle.style.borderRadius = "50%";
            circle.style.backgroundColor = "red"

            resolve(circle);
        }, 0);
    })
}