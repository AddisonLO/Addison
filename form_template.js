function ShowingValue (element){
    console.log("Input value: ", element.value);
}

document.getElementById('color').addEventListener("input", function(){
    document.getElementById("preview").style.backgroundColor = this.value;
});



volume.oninput = function(){
   document.getElementById('volume').addEventListener("input", function(){
    document.getElementById("volumeValue").textContent = this.value;
})};

const input = document.getElementById('volume');
const output = document.getElementById('VolumeValue');

input.addEventListener('input', function (){
    output.textContent = input.value;
});

