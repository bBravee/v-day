const jsConfetti = new JSConfetti();

const gifs = document.querySelectorAll(".main-container .tenor-gif-embed");
const finalGif = document.querySelector(
  ".main-container .tenor-gif-embed.final"
);
const movableButton = document.querySelector(".main-container #movableButton");
const acceptButton = document.querySelector(".main-container #acceptButton");
let textidx = 0;
let clickCounter = 0;
let currentGifIndex = 0;

function moveRandom(e) {
  console.log("aaaa");
  e.style.position = "absolute";
  e.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  e.style.top = Math.floor(Math.random() * 90 + 5) + "%";
}

movableButton.addEventListener("click", (e) => {
  moveRandom(movableButton);
  if (finalGif.classList.contains("active")) {
    return;
  }
  clickCounter++;

  if (clickCounter % 3 === 0 && currentGifIndex < gifs.length - 2) {
    if (currentGifIndex < gifs.length - 1) {
      gifs[currentGifIndex].classList.remove("active");
      currentGifIndex++;
      gifs[currentGifIndex].classList.add("active");
    }
  }
});

acceptButton.addEventListener("click", (e) => {
  document.querySelector("h1").style.display = "none";
  document.querySelector(".button-container").style.display = "none";
  jsConfetti.addConfetti({
    emojis: ["❤️", "🐷"],
    confettiRadius: 6,
    confettiNumber: 70,
  });
  const finalGif = document.querySelector(
    ".main-container .tenor-gif-embed.final"
  );
  if (finalGif) {
    gifs.forEach((gif) => gif.classList.remove("active"));
    finalGif.classList.add("active");
  }
});

document.addEventListener(
  "click",
  () => {
    const audio = new Audio("./audio/jabol.mp3");
    setTimeout(() => {
      audio.play();
    }, 1000);
  },
  { once: true }
);
