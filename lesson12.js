const messages = {
    Monday: "Start your week strong!",
    Tuesday: "Keep the momentum going!",
    Wednesday: "Halfway there!",
    Thursday: "Almost the weekend!",
    Friday: "Finish strong",
    Saturday: "Enjoy your weekend!",
    Sunday: "Rest and recharge",
};

function getTodayMessage() {
    const days = ["Sunday", "Monday", "Tudesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    const today = new Date().getDay();
    console.log(messages[days[today]]);
    return messages[days[today]] || "Have a great day!";
};

document.getElementById("showMessage")
        .addEventListener("click", () => {
            const message = getTodayMessage();

            document.getElementById("greeting").textContent = message;
        });

document.getElementById("button-change")
        .addEventListener("click", function () {
            if (this.style.backgroundColor === "red") {
                this.style.backgroundColor = "green";
                this.textContent = "Change Red";
            } else {
                this.style.backgroundColor = "red";
                this.textContent = "Change Green";
            }
        });

let grades = [85, 90, 88];
console.log(typeof grades);
