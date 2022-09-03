// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read() {
        this.a = +prompt("Введите значение а");
        this.b = +prompt("Введите значение b")
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

console.log(calculator.read());
console.log(calculator.mul());
console.log(calculator.sum());

// создать обьект чайник. У него должны быть свойства: модель/производитель, дата производства, срок годности, срок гарантии, цвет, высота, 
// вместимость (сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и  
// 3 метода - включить чайник, выключить чайник, вывести данные о чайнике и очистить 
// данные (очистка значения, сколько раз чайник был включен)



let teapot = {
    color: "white",
    status: "isOn",

    get() {
        this.time = +prompt("Сколько лет работал чайник?", 6);
    },

    turnon() {
        console.log("Чайник включен");
    },

    turnoff() {
        console.log("Чайник выключен")
    },

    write() {
        return this;
    },

    clean() {
        return this && delete this.get;
    }
};

teapot.get();
console.log(teapot.turnon());
console.log(teapot.turnoff());
console.log(teapot.write());
console.log(teapot.clean());