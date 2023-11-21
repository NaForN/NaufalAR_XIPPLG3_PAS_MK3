const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let startTime; // Variable to store the start time
let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    const gameTime = calculateGameTime();
    alert("Game Over!\nCactus Dodged: " + gameTime);
    resetGame();
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
  if (!startTime) {
    startTime = new Date(); // Record the start time when the player jumps for the first time
  }
});

function calculateGameTime() {
  const endTime = new Date();
  const elapsedTime = Math.floor((endTime - startTime) / 1000); // in seconds
  return elapsedTime;
}

function resetGame() {
  startTime = undefined;
}
