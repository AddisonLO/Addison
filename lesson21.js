// const original = document.getElementById("original");
// const shallowCopy = original.cloneNode(false);
// const deepCopy = original.cloneNode(true);

// deepCopy.id = "copy";
// document.body.appendChild(deepCopy);

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// if(parent.ondeviceorientationabsolute(child)) {
//     console.log("parent inludes child");
// }

// const position = element1.compareDocumentPosition(element2);

// const pos = el1.compareDocumentPosition(el2);

// if(pos & 16) {
//     console.log("child is contained by parent");
// }

// const element3 = document.getElementById("myElement");
// const rect = element3.getBoundingClientRect();

// console.log(rect.top);
// console.log(rect.left);
// console.log(rect.width);
// console.log(rect.height);

// console.log(element3.offsetTop);
// console.log(element3.offsetLeft);
// console.log(element3.offsetWidth);
// console.log(element3.offsetHeight);

// console.log(element3.scrollTop);
// console.log(element3.scrollLeft);

// const targetElement = document.getElementById("target");

// targetElement.scrollIntoView({
//     behavior: "smooth",
//     block: "start"
// });

// window.scrollTo({
//     top: 100,
//     left: 0,
//     behavior: "smooth"
// });

// window.scrollBy({
//     top: 100,
//     behavior: "smooth"
// });

//  const person1 = { name: "John", age: 25 };
//  const person1 = "Tim";

person1 = {name: "Mary"};
person1 = "Tom";

const originalArray1= [1, 2, 3];
const newArray = [...originalArray1];

const newArray2 = originalArray1;
console.log(originalArray1);
console.log(newArray);

const person = { name: "John", age: 25};
const copy = { ...person};

const defaults = { color: "blue", size: "medium"};
const userPrefs = {color: "red"};
const settings = {...defaults, ...userPrefs};
console.log(settings);

const mixArray = [[1,2,3], 4, 5, 6];

for (let item of mixArray) {
    if (Array.isArray(item) == true) {
        console.log("You got an array here: " + item);
    }
}

const name = "John";
const age = 25;

const person2 = {
    name,
    age,
    city: "Hong Kong"
};
console.log(person2);

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

const prop = "name";
const person4 = {};
person4[prop] = "John";

const prop1 = "name";
const person3 = {
    [prop1]: "John"
};

const prefix = "user";
const id = 123;
const user = {
    [`${prefix}_${id}`]: "John Doe"
}
console.log(`${prefix}_${id}`);
console.log(user.user_123);

function createObject(key, value) {
    return { [key]: value};
}
const obj = createObject("Characteristic", "Humble");
console.log(obj.Characteristic);

function createObject(keys, values) {
    const obj = {};

    for(let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }

    return obj;
}

const result = createObject(
    ["name", "age", "city"],
    ["Kelvin", 40, "Hong Kong"]
);

console.log(result);

let message = "Hello, my name is Addison and I am 23 years old";

let [hello, ...rest] = message.split(",");
console.log(hello);

rest.join("");
console.log(rest);

const html1 = '<div>\n' + '   <h1>Title</h1>\n' + '   <p>Content</p>\n' + '</div>';
const html2 = `
<div>
   <h1>Title</h1>
   <p>Content</p>
</div>
`;

console.log(html1);
console.log(html2);






