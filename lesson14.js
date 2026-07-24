let person = {
    name: "John",
    age: 30,
    district: "Yeun Long",
    isStudent: false,
    "full name": "Thor Odinson",
    "1stChoice": "Rainbow Bridge"
};

console.log(person.name);
console.log(person.district);
console.log(person["age"]);

person.age = 22036;

person["district"] = "Asgard";

person.name = "Thor";

person.phone = "123-456-7890";

person["1stChoice"];

console.log(person["full name"]);

console.log(person);

let calculator = {
    brand: "Casio",
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 5));
console.log(calculator.subtract(8, 20));

console.log(calculator.add);

let person1 = {
    firstName: "Jane",
    lastName: "Doe",
    getFullName: function() {
        return this.lastName = this.firstName;
    },
    introduce: function() {
        return "Hi, I'm " + this.getFullName();
    }
};

let student = {
    name: "Alice",
    age: 25,
    grade: 85
};

console.log("name" in student);
console.log("age" in student);

delete student.grade;
console.log(student);

let keys = Object.keys(student);
console.log(keys)

let values = Object.values(student);
console.log(values);

let entries = Object.entries(student);
console.log(entries);

let nigga = {
    name: "Franklin",
    age: 23,
    district: "Santa Monica"
}

for(let key in nigga) {
    console.log(`${key}: ${nigga[key]}`);
}


let person3 = {
    name: "Peter",
    age: 25,
    district: "Yuen Long",
    "isStudent": false

};

console.log(person3.age);

person3.age = 26;
person3.job = "Engineer";

console.log(person3.age);
console.log(person3.job);


let person4 = {
    name: "Tim",
    age: 1000,
    district: "heaven"
}

// let { name, age, district } = person4;
let { name: userName, age: userAge, district: userDistrict } = person4;
let { name, age = 8, district = "Tuen Mun"} = person4;

console.log(userName);
console.log(userAge);
