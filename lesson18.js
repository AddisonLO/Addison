const button = document.getElementById("myButton");

button.addEventListener("click", function () {
    console.log("You have clicked the button");
});

function handleClick() {
    alert("You clicked the button!");
}

button.addEventListener("click", handleClick);

button.addEventListener("click", () => {
    console.log("Use arrow function to click");
});

button.addEventListener("click", function(event) {
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
});

function handler() {
    console.log("Event Triggered.");
}

const element = document.getElementById("myButton");
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mousedown", handler);
element.addEventListener("mouseup", handler);
element.addEventListener("mousemove", handler);
element.addEventListener("mouseover", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);

input.addEventListener("keyup", handler);
input.addEventListener("kypress", handler);

function submitHandler(e) {
    e.preventDefault();
}
form.addEventListener("submit", submitHandler);
input.addEventListener("change", handler);
input.addEventListener("input", handler);
input.addEventListener("focus", handler);
input.addEventlistener("blur", handler);

// 5.6 Q5.1

function listItemAdd(event) {
    if (event.target.tagName === "LI") {
       console.log("You have clicked a li");
    }
}

list.addEventListener("click", listItemAdd);

// 5.6 Q5.3

document.addEventListener("keydown", function(event){
    if(event.key === "s" && event.ctrlKey) {
        event.preventDefault();
        console.log("Save function activated!");
    }
});

