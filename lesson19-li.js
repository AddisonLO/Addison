const form = document.getElementById("myForm");

const username = form.elements["username"];
const email = form.elements["email"];

const password = form.querySelectorAll("input[type='password']");

const input = document.getElementById("username");

const value = input.value;

input.value = "New user name";

input.value = "";

const select = document.getElementById("country");

const selectedValue = select.value;

const selectedOption = select.options[select.selectedIndex];

const selectedText = selectedOption.text;

const selectedOption2 = select.options[select.selectedIndex].text;

const checkbox = document.getElementById("agree");

if (checkbox.checked) {
    console.log("Agree to the form");
}

checkbox.checked = true;

const radios = document.getElementById("gender");


let selectedGender;

for (let radio of radios) {
    if (radio.checked) {
        selectedGender = radio.value;
        break;
    }
}

let regForm = document.getElementById("registrationForm");

regForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = regForm.elements["username"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    let isValid = true;
    let errors = [];

    if (username.length < 3) {
        errors.push("Username need 3 letter minimum");
    }

    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(!pattern.test(email)) {
        errors.push("Please input valid email address");
        isValid = false;
    }
    
}
);

const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");

usernameInput.addEventListener("input", function() {
    const value = this.value;

    if (value.length < 3) {
        usernameError.textContent = "Username is too short";
        usernameError.style.display = "black";
        this.classList.add("error");
    } else {
        usernameError.style.display = "none";
        this.classList.remove("error");
    }

    const emailInput = document.getElementById("email");

    emailInput.addEventListener("blur", function () {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailPattern.text(this.value)) {
            this.classList.add("error");
        } else {
            this.classList.remove("error");
        }
    });
});

// 5.7 Q5.3

const psd = document.getElementById("psd");

psd.addEventListener("input", function () {
    if (psd.value.length < 3) {
        this.classList.add("error");
        //throw new TypeError("This is an error");
    } else {
        this.classList.remove("error");
    }
});

// 5.7 Q5.2

const p = document.getElementById("password_2");

let isValid2 = true;

if (p.value.length < 6) {
    p.classList.add("error");
    isValid2 = false;
}

const products = [
    {id: 1, name: "Laptop", price: 25000},
    {id: 2, name: "Desktop", price: 18000},
    {id: 3, name: "Monitor", price: 1000},
    {id: 4, name: "RTX5090", price: 32000}
];

function createProductList(products) {
    const ul = document.createElement("ul");
    ul.className = "product_list";

    products.forEach(product => {
        const li = document.createElement("li");
        li.className = "product-item";

        const nameSpan = document.createElement("span");
        nameSpan.className = "project-name";
        nameSpan.textContent = product.name;

        const priceSpan = document.createElement("span");
        priceSpan.className = "product-price";
        priceSpan.textContent = `NT$ ${product.price}`;

        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.dataset.productId = product.id;

        li.appendChild(nameSpan);
        li.appendChild(priceSpan);
        li.appendChild(button);
        ul.appendChild(li);
    });
    return ul;
}







