const timerDisplay = document.querySelector(".timer");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let intervalId;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTimer, 10);
  }
}
function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(intervalId);
  elapsedTime = 0;
  displayTime(0);
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(time) {
  const minutes = Math.floor(time / 60000);
  time %= 60000;
  const second = Math.floor(time / 1000);
  time %= 1000;
  const millisecond = Math.floor(time / 10);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSecond = String(second).padStart(2, "0");
  const formattedmillisecond = String(millisecond).padStart(2, "0");

  timerDisplay.textContent = `${formattedMinutes}:${formattedSecond}:${formattedmillisecond}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

displayTime(0);
