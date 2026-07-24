const time = document.getElementById("time");
const watch = document.createElement("p");

watch.className = "watch";

function tick() {
    const timeString = new Date().toLocaleTimeString();
    watch.textContent= `Now is : ${timeString}`;
}

setInterval(tick, 1000);

time.appendChild(watch);

tick();