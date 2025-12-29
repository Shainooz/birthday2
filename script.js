let score = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 90 + "vw";

  heart.onclick = () => {
    score++;
    document.getElementById("score").textContent = score;
    heart.remove();

    if (score === 5) {
      alert("Happy 18th ❤️ You mean everything to me!");
    }
  };

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 800);
