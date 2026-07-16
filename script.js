document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", () => {
            alert("❤️ Happy Monthsary! ❤️\n\nThank you for being part of my life. Every day with you is a blessing. I love you forever. 🌹");
        });
    }

    // Floating hearts
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "-20px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animation = "floatUp 5s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 800);
});

// Animation for floating hearts
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-110vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
