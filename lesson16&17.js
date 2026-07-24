//5.2 Q5.1

const newClass = "item_block";

const elements = document.getElementsByClassName("box");

for (let element of elements ) {
    if(element !== null){
    element.classList.add(newClass);
    }
}

// Array.from(elements).forEach(element => {
//   element.classList.add("item_block");
// });

// 5.2 Q5.2
let pLength = document.querySelectorAll("p").length;


//5.2 Q5.3

let changing = document.getElementById("myElement");
if (changing !== null) {
    changing.style.color = "red";
} else {
    throw new ReferenceError("You don't have the fucking ID, go add it");
}





const list1= document.getElementById("myList")
const firstElement = list1.firstElementChild;
const lastElement = list1.lastElementChild;

console.log(firstElement);
console.log(lastElement);

const current = document.getElementById("current");
const next = current.nextSibling;
const previous = current.previousSibling

const nextElement = current.nextElementSibling;
const previousElement = current.previousElementSibling;

function getAllSiblings(element) {
    const siblings = [];
    let sibling = element.parentNode.firstElementChild;

    while(sibling) {
        if (sibling !== element) {
            siblings.push(sibling);
        }
        sibling = sibling.nextElementSibling;     
    }

    return siblings;
}

function findParentByClass(element1, className) {
    let parent = element1.parentNode;

    while (parent && !parent.classList.contains(className)) {
        parent = parent.parentNode;
    }

    return parent;
}


function getAlllSiblings(elem) {
    let siblings = [];
    let parent = elem.parentNode;
    for(let child of parent.children) {
        if (child !== elem) {
            siblings.push(child);
        }
    }
    return siblings;
}

document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
        let siblings = getAlllSiblings(option);
        siblings.forEach(sib => sib.classList.add("hight-yellow"));
    })
})

const addDiv = document.createElement("div");
const newButton = document.createElement("button");

const textNode = document.createTextNode("This is new text");

const paragraph = document.createElement("p");
const text = document.createTextNode("Thisi is a new paragraph");
paragraph.appendChild(text);

const newItem = document.createElement("li");
newItem.textContent = "new item";

const list = docuemnt.getElementById("mylist");
list.appendChild(list);

const insertItem = document.createElement("li");
insertItem.textContent = "Inserted item";

const list2 = document.getElementById("myList");
const firstItem = list2.firstElementChild;

const item2 = document.getElementById("xyz")
list2.insertBefore(insertItem, item2);

const itemToRemove = document.getElementById("old_item");
list.removeChild("old_item");

const itemToRemove1 = document.getElementsById("old_item");
itemToRemove.parentNode.removeChild(itemToRemove);

const itemToRemove2 = document.getElementById("old_item1");



const newElement = document.createElement("p");
newElement.textContent = "new paragraph";
const oldElement = document.getElementById("oldParagraph");
const parent = oldElement.parentNode;
parent.replaceChild(newElement, oldElement);


const div = document.getElementById("myDiv");
console.log(div);

div.innerHTML = "<p>Good Morning china, now I have bing chilling<p>";
div.innerHTML = "<strong>Bold text</strong> and normal text";

const demo = document.getElementById("demo");
const result = document.getElementById("result");

document.getElementById("showInnerText").addEventListener("click", () => {
    result.textContent = demo.innerText;
});

document.getElementById("changeText").addEventListener("click", () => {
    demo.textContent = "<strong>This is not html, only normal text instead";
});

// 5.4 Q5.1

const targetDiv = document.getElementById("oldItem");
const targetList = targetDiv.getElementById("myList");
targetDiv.removeChild(targetList);


// 5.4 Q5.2

const placedDiv = document.getElementById("oldItem");
const paraTag = document.createElement("p");
paraTag.textContent = "This is a new Paragraph";
placedDiv.appendChild(paraTag);

// 5.4 Q5.3

const mylist = document.getElementById("mylist");
let itemList = document.createElement("li");
itemList.textContent = "Inserterd item";
mylist.insertBefore(itemList, mylist.children[1]);

const link = document.querySelector("a");
const href = link.getAttribute("href");
const target = link.getAttribute("target");
console.log(href);
console.log(target);


const imageDiv = document.getElementById("image-div");
const image = document.querySelector("img");
image.setAttribute("src", "new-image.jpg");
image.setAttribute("alt", "New description");
imageDiv.appendChild(image);

const element4 = document.getElementById("myElement");
element4.classList.add("active");
element4.classList.add("highlight", "border");
element4.classList.remove("old-class");
element4.classList.toggle("visible");

if (element.classList.contains("active")) {
    console.log("Active element");
}
element.classList.replace("old-class", "new-class");






    





