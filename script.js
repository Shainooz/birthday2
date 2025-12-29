console.log("script.js loaded");

let score = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "❤️";

  heart.style.position = "absolute";
  heart.style.fontSize = "30px";
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.bottom = "-40px";
  heart.style.cursor = "pointer";

  document.body.appendChild(heart);

  let position = -40;
  const floatInterval = setInterval(() => {
    position += 2;
    heart.style.bottom = position + "px";

    if (position > window.innerHeight) {
      clearInterval(floatInterval);
      heart.remove();
    }
  }, 20);

  heart.onclick = () => {
    score++;
    document.getElementById("score").textContent = score;
    heart.remove();

    if (score === 5) {
      alert("Happy 18th ❤️ You mean the world to me!");
    }
  };
}

setInterval(createHeart, 8
