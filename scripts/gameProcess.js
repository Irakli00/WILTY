import { players, page, htmls, fakeStories } from "./assets.js";

const startGame = function (e) {
  const startBTN = "startGameBTN";
  let turn = 0;

  if (e.target.classList.contains(startBTN)) {
    /* see if players are >1 */
    console.log(players);
    page.innerHTML = htmls.card;

    page.querySelector(".player--name").textContent = players[turn].name + ":";
    /* colors should be same as inputs */
  }
};

const cardReveal = function (e) {
  let turn = 0;
  const cardContainer = e.target.closest(".card-container");
  if (cardContainer) {
    cardContainer.classList.add("card-container--revealed");

    /* adding story */
    const random_I = Math.floor(Math.random() * fakeStories.length);

    cardContainer.querySelector(".card-story").textContent =
      players[turn].story || fakeStories[random_I];

    startCountdown();
  }
};

const startCountdown = function () {
  let countdownMinutes = 5;

  let targetTime = new Date().getTime() + countdownMinutes * 60 * 1000;

  // Function to update the timer
  function updateTimer() {
    let now = new Date().getTime();
    let distance = targetTime - now;

    // Calculate minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown").innerHTML = `${minutes}:${seconds}`;
  }

  updateTimer();
  setInterval(() => {
    updateTimer();
  }, 1000);
};

export const gameProgressionEvents = function (e) {
  startGame(e);
  cardReveal(e);
};
