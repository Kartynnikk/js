// // Создайте объект calculator (калькулятор) с тремя методами:

// // read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// // sum() (суммировать) возвращает сумму сохранённых значений.
// // mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//     read() {
//         this.a = +prompt("Введите значение а");
//         this.b = +prompt("Введите значение b")
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     }
// };

// console.log(calculator.read());
// console.log(calculator.mul());
// console.log(calculator.sum());


// // Использование функции-конструктор

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Введите значение а");
//         this.b = +prompt("Введите значение b")
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;
//     };
// };

// let calculator = new Calculator();

// console.log(calculator.read());
// console.log(calculator.mul());
// console.log(calculator.sum());


// // создать обьект чайник. У него должны быть свойства: модель/производитель, дата производства, срок годности, срок гарантии, цвет, высота, 
// // вместимость (сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и  
// // 3 метода - включить чайник, выключить чайник, вывести данные о чайнике и очистить 
// // данные (очистка значения, сколько раз чайник был включен)



let kettle = {
    color: "white",
    "is on": true,
    manufacturer: "Samsung",
    model: "B12/84",
    manufactureDate: "12.08.2022",
    garanteePeriod: 3,
    height: 1,
    capacity: 2,

    setUsageYear() {
        this.time = +prompt("Сколько раз включали чайник?", 6);
    },

    turnon() {
        return this["is on"];
    },

    turnoff() {
        return this["is on"] = false;
    },

    write() {
        return this;
    },

    clean() {
        for (key in kettle) {
            delete this.time;
        }
        return this;
    },

    claculate() {
        return this.time + this.turnon();
    }
};

kettle.setUsageYear();
console.log(kettle.turnon());
console.log(kettle.turnoff());
console.log(kettle.write());
console.log(kettle.clean());
console.log(kettle.claculate());


// // Задача про зарплату

// let employee = {
//     firstname: "John",
//     lastname: "Smith",
//     rate: 5,
//     workdays: 22,
//     getCurrentSalary() {
//         return this.rate * this.workdays;
//     }
// };

// const worker = employee;

// worker.firstname = "Ira", "Petrova", 5, 25;

// console.log(worker.firstname);
// console.log(worker.lastname);
// console.log(worker.rate);
// console.log(worker.workdays);
// console.log(worker.getCurrentSalary());

// // Задача

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt("Введите значение а", 0);
//     };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();

// console.log(accumulator.value);