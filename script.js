// Домашнее задание к уроку №32: “Функции”

// Задание 1: Простая функция

function greet() {
    console.log("Привет, мир!");
}

greet();


// Задание 2: Функция с параметрами

function sayHello(name) {
    console.log("Привет, " + name + "!");
}

sayHello("Даша");
sayHello("Амир");


// Задание 3: Функция с возвращаемым значением

function sum(a, b) {
    return a + b
}

let result = sum(4, 5);
console.log(result);


// Задание 4: Функция с проверкой на чётность

function isEven(a) {
    return (a % 2 === 0) ? "true" : "false"
}

let isEvenResult = isEven(6);
console.log(isEvenResult);

let isEvenResult2 = isEven(11);
console.log(isEvenResult2);


// Задание 5: Функция с несколькими параметрами и условием

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Числа равны";
    }
}

let maxNum = max(10,8);
console.log(maxNum);


// Задание 6: Функция для работы со строками

function getInitials(name, surname) {
    return name[0] + "." + surname[0] + "."
}

let initials = getInitials("Алиса", "Боброва");
console.log(initials);

let initials2 = getInitials("Миша", "Попов");
console.log(initials2);


// Задание 7: Функция с вложенными вызовами
       
function cube(c) {
    let square = function(c) {
        return c ** 2;
    }
    return square(c) * c
}

let cubeResult = cube(3);
console.log(cubeResult);


// Задание 8: Стрелочная функция

let sum2 = (a, b) => a + b
console.log(sum2(4, 11));



// Дополнительное задание:

function getFactorial(f) {
    if (f === 0) {
        return 1;
    } else {
        return f * getFactorial(f - 1);
    }
}

let factorialResult = getFactorial(3);
console.log(factorialResult);


