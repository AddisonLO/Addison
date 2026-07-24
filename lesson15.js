let great = function (name) {
    return `Hello, ${name}`;
}

let great2 = "hi";
console.log(great("Peter"));

function run(action) {
    action();
}

let sayHello = function() {
    console.log("Hello");
}

run(sayHello);

let attack;

attack = function () {
    console.log("sword");
}

let calculator = {
    add: function (a,b) {return a + b;},
    subtract: function (a, b) { return a - b;}
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(20, 1));

let var2 = "hi";

let globelVar = "I am a global variable";
function testScope() {
    let localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar);
}
testScope();


function oldWay(name, greeting) {
    name = name || "Guest";
    greeting = greeting || "Hello";
    return greeting + ", " + name + " !";
}

console.log(oldWay());

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Alan"));
console.log(greet("Peter", "Yo"));
console.log(greet("Peter", undefined));

// 4.10 Q5.1

function greetPerson(name) {
    return `Hello, ${name}`;
}

greetPerson("Peter");
greetPerson("John");

// 4.10 Q5.2

function multiply(number1, number2) {
    return number1 * number2;
}

result = multiply(2, 2);

console.log(result);

// 4.10 Q5.3

function greet(name = "Guest") {
    return `Hello, ${name}`;
}

greet();
greet("Alice");

let student = {
    name1: "Tim",
    scores: {
        math: 100,
        english: 100,
        science: 100
    }
};

let { name1, scores: {math, english, science}} = student;

colors = ["red", "blue", "green"];
let { red, blue, green } = colors;

let [red1, , green1] = colors;

console.log(name1);
console.log(math);
console.log(science);

function displayPerson( {name, age, district = "heaven"}) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`District: ${district}`);
}

let person5 = { name: "Tom", age: 35};
displayPerson(person5);


function calculate(a, b) {
    return a + b;
}

let numbers = [5, 10];
console.log(calculate(numbers));


try {
    let result = somefunction();
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
}

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisor cannot be zero");
        }
        return a / b;
    } catch (error) {
        console.log("Error: " + error.message);
        return null;
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));


function readFile(filename) {
    console.log(`Opening file: ${filename}`);
    try {
        if (filename === "") {
            throw new Error("Filename cannot be empty");
        }
        console.log("Reading file contents...");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log("Closing file");
    }
}

function validdateAge(age) {
    if(typeof age !== "number") {
        throw new TypeError("Age must be a number");
    }
    if(age < 6) {
        throw new RangeError("Age cannot be a negative number");
    }
    if (age > 150) {
        throw new RangeError("Are you superman or what?");
    }
    return true;
}


// 4.11 Q5.1

function divide1(integer1, integer2) {
    if (integer2 === 0) {
        console.log("Denominator cannot be 0.");
        return null;
    } 
    return integer1 / integer2;
}

console.log("General message");
console.error("Error message");
console.warn("Warning message");
console.info("Information message");

console.timeEnd("Loop Execution Time");
for (let i =0; i < 10000000; i++) {

}
console.timeEnd("Loop Execution Time");
