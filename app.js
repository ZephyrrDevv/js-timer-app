const screenDisplay = document.getElementById("screen");
const containerBody = document.getElementById("container");
const timerMinute = document.getElementById("minutes");
const timerSeconds = document.getElementById("seconds");
const timerCentiSeconds = document.getElementById("centiseconds");
const starBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const clearBtn = document.getElementById("clear");
const colorBtn = document.getElementById("color");
const setTimerBtn = document.getElementById("setTimer");
const timerSetupUI = document.getElementById("timerSetup");
const inputMin = document.getElementById("inputMin");
const inputSec = document.getElementById("inputSec");
const startCountdownBtn = document.getElementById("startCountdown");
const backBtn = document.getElementById("backBtn");
const cdMin = document.getElementById("cdMinutes");
const cdSec = document.getElementById("cdSeconds");
const cdCenti = document.getElementById("cdCenti");

let centi = 0;
let sec = 0;
let min = 0;
let timerInterval;

let cddCenti = 0;
let cddSec = 0;
let cddMin = 0;
let countDownInterval;

starBtn.onclick = function () {
  timerInterval = setInterval(updateTimer, 10);
};

function updateTimer() {
  centi++;
  if (centi == 100) {
    centi = 0;
    sec++;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }

  timerMinute.textContent = String(min).padStart(2, "0");
  timerSeconds.textContent = String(sec).padStart(2, "0");
  timerCentiSeconds.textContent = String(centi).padStart(2, "0");
}

stopBtn.onclick = function () {
  clearInterval(timerInterval);
};

clearBtn.onclick = function () {
  timerMinute.textContent = "00";
  timerSeconds.textContent = "00";
  timerCentiSeconds.textContent = "00";
};

setTimerBtn.onclick = function () {
  containerBody.style.display = "none"; // hide stopwatch
  timerSetupUI.style.display = "flex"; // show countdown setup
};

backBtn.onclick = function () {
  timerSetupUI.style.display = "none";
  containerBody.style.display = "flex";
};

startCountdownBtn.onclick = function () {
  cddMin = Number(inputMin.value);
  cddSec = Number(inputSec.value);
  cddCenti = 0;
  cdMin.textContent = String(cddMin).padStart(2, "0");
  cdSec.textContent = String(cddSec).padStart(2, "0");
  cdCenti.textContent = "00";

  countDownInterval = setInterval(updateCountdown, 10);
};

function updateCountdown() {
  if (cddMin === 0 && cddSec === 0 && cddCenti === 0) {
    clearInterval(countDownInterval);
    return;
  }

  cddCenti--;
  if (cddCenti < 0) {
    cddCenti = 99;
    cddSec--;
  }
  if (cddSec < 0) {
    cddSec = 59;
    cddMin--;
  }

  cdMin.textContent = String(cddMin).padStart(2, "0");
  cdSec.textContent = String(cddSec).padStart(2, "0");
  cdCenti.textContent = String(cddCenti).padStart(2, "0");
}
