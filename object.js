// // Создайте объект calculator (калькулятор) с тремя методами:

// // read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// // sum() (суммировать) возвращает сумму сохранённых значений.
// // mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calc = {
    read() {
        this.a = +prompt("Введите значение а");
        this.b = +prompt("Введите значение b");
    },

    sum() {
        if (this.a && this.b) {
            return this.a + this.b;
        }
    },

    mul() {
        if (this.a && this.b) {
            return this.a * this.b;
        }
    },
};

console.log(calc.read());
console.log(calc.mul());
console.log(calc.sum());


// // Использование функции-конструктор

function Calculator() {
    this.read = function() {
        this.a = +prompt("Введите значение а");
        this.b = +prompt("Введите значение b")
    };
    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
};

let calculator = new Calculator();

console.log(calculator.read());
console.log(calculator.mul());
console.log(calculator.sum());


// // создать обьект чайник. У него должны быть свойства: модель/производитель, дата производства, срок годности, срок гарантии, цвет, высота, 
// // вместимость (сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и  
// // 3 метода - включить чайник, выключить чайник, вывести данные о чайнике и очистить 
// // данные (очистка значения, сколько раз чайник был включен)



let kettle = {
    color: "white",
    isOn: false,
    manufacturer: "Samsung",
    model: "B12/84",
    manufactureDate: "12.08.2022",
    garanteePeriod: 3,
    height: 1,
    capacity: 2,
    usageTime: 0,

    turnOn() {
        this.isOn = true;
        console.log(`The status of this state is ${this.isOn}`);
        this.usageTime++;
        if (this.isOn) {
            return;
        }
    },

    turnOff() {
        this.isOn = false;
        console.log("You turned off the kettle");
        console.log(`The status of this state is ${this.isOn}`)
    },

    clean() {
        this.usageTime = 0;
    },

    getUsageTime() {
        console.log(`Current ammount of usage time is ${this.usageTime} `)
        return this.usageTime;
    },
};

kettle.turnOn();
kettle.turnOff();
kettle.getUsageTime();
kettle.clean();




// // Задача про зарплату

let employee = {
    firstname: "John",
    lastname: "Smith",
    rate: 5,
    workdays: 22,
    getCurrentSalary() {
        return this.rate * this.workdays;
    }
};


console.log(employee.firstname = "Ira");
console.log(employee.lastname = "Petrova");
console.log(employee.rate);
console.log(employee.workdays);
console.log(employee.getCurrentSalary(5, 25));

// // Задача

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Введите значение а", 0);
    };
}

let accumulator = new Accumulator(1);

accumulator.read();

console.log(accumulator.value);