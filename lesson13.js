let colors =['red', 'blue', 'green', 'yellow', 'orange'];
let numbers = [];
let index = 0;

for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

document.getElementById('toggle_color_change').addEventListener('click', function() {
    let colorDiv = document.getElementById('color-div');

    
    
    if (index < numbers.length -1) {
        colorDiv.innerHTML = `<p>You pressed the button for ${numbers[index]} times.</p>`;
        index++;
    } else {
        colorDiv.innerHTML = "<p>You have already pressed the button for 100 times! Congratulations!</p>";
        
    }
    

});

// This is a simple for loop that counts from 1 to 5 and logs the count to the console.

let item = 5

for( let i = 1; i <= item; i++) {
    console.log(`You scanned ${i}th item.`);
}


let contract = 5;

for (let i = 1; i<= 10; i++) {
    if(i == contract) {
        console.log(`You have found the contract at ${i}th files`)
    }
}

let number = [1,2,3,4,5];
let part = number.slice(1,4);
console.log(part);
console.log(number);

let removed = number.splice(2, 2);
console.log(removed);
console.log(number);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = arr1.concat(arr2);
console.log(combined);