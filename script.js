function showLove(){
alert("Happy Monthsary ❤️\n\nI love you forever, Fathima. Thank you for making my life beautiful.");
}

const start = new Date("May 17, 2026");

function updateTimer(){

const now = new Date();

const diff = now - start;

const days = Math.floor(diff/(1000*60*60*24));

document.getElementById("timer").innerHTML =
days + " days together ❤️";
}

setInterval(updateTimer,1000);

updateTimer();
