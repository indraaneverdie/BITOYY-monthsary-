function showLove(){
alert("Happy Monthsary ❤️\n\nI love you forever, Fathima. Thank you for making my life beautiful.");
}


// Floating Hearts ❤️

const hearts = [
"❤️",
"💕",
"💖",
"💗",
"💘"
];

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left = Math.random()*100 + "vw";

heart.style.animationDuration = (Math.random()*3+3)+"s";

document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,500);



// Timer ⏳

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



// Music 🎵

function toggleMusic() {

const music = document.getElementById("music");

if (music.paused) {

music.play();

} else {

music.pause();

}

}
