const list = document.getElementById("myList");

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
list.appendChild(fragment);

const element = document.getElementById("myElement");

element.style.width = "200px";
element.style.height = "200px";
element.style.backgroundColor = "red";
element.style.border = "1px solid black";

element.style.cssText = `
    width: 200px;
    height: 200px;
    background-color: red;
    border: 1px solid black;
`;

const parent = element.parentNode;

const nextSibling = element.nextSibling;

parent.removeChild(element);

for (let i = 0; i < 100; i++) {
    const child = document.createElement("div");

    child.textContent = 1;

    element.appendChild(child);
}

parent.insertBefore(element, nextSibling);


const container = document.getElementById("container");

container.addEventListener("click", function(e) {
    if(e.target.matches("button.delete")) {
        const item = e.target. closest(".item");
        item.remove();
    } else if (e.target.matches("button.edit")){
        const item = e.target.closest(".item");
        
    }
})

class VirtualScroll {
    constructor(container, items, itemHeight) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;

        this.visibleItems = 
            Math.ceil(container.clientHeight / itemHeight);
        this.render();
        this.container.addEventListener("scroll", () => this.render())
    }

    render() {
        const scrillTap = this.container.srollTop;
        const startIndex =
            Math.floor(scrillTap / this.itemHeight);
        const endIndex = startIndex + this.visibleItems;
        this.container.innerHTML = "";

        for (let i = startIndex;
            i < endIndex && i < this.items.length; i++) {
                const item = document.createElement("div");
            item.style.positin = "absolute";
            item.style.top = (i + this.itemHeight) + "px";
            item.textcContent = this.items[i];
            this.container.appendChild(item);
            }
        
        }

}

{

let a = "aaa";
console.log(a);

}

function add(a, b) {
    return a+b;
}

const add = (a, b) => {
    return a+b;
}

function createUser(name, age = 18, role = "user") {
    return {name, age, role};
}

function sum() {
    let total = 0;
    for (let i = 0; arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function introduce(greeting, ...names) {
    console.log(greeting + " " + names.join(" and "));
}

introduce("Hello", "John", "Mary", "Peter");


