import { players, page, htmls, fakeStories, gameMinutes } from "./assets.js";

let turn = 0;

const startGame = function (e, turn) {
  const startBTN = "startGameBTN";
  if (e.target.classList.contains(startBTN)) {
    /* see if players are >1 */
    console.log(players);
    page.innerHTML = htmls.card;

    page.querySelector(".player--name").textContent = players[turn].name + ":";
    /* colors should be same as inputs */
  }
};

const cardReveal = function (e, turn) {
  const cardContainer = e.target.closest(".card-container--init");
  if (cardContainer) {
    cardContainer.classList.add("card-container--revealed");

    cardContainer.classList.toggle("card-container--init"); //to avoid more than one countdown

    /* adding story */
    const random_I = Math.floor(Math.random() * fakeStories.length);

    cardContainer.querySelector(".card-story").textContent =
      players[turn].story || fakeStories[random_I];

    startCountdown(e);
  }
};

const startCountdown = function (e) {
  let seconds = 60;
  let minutes = gameMinutes;

  setTimeout(() => {
    let intervalID = setInterval(() => {
      seconds--;
      seconds == -1 && minutes-- && (seconds = 59);

      page
        .querySelector(".countdown")
        .querySelector("p").textContent = `${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;

      //minutes < 0 && clearInterval(intervalID) && nextPlayer();

      if (minutes < 0) {
        clearInterval(intervalID);
        nextPlayer(e);
      }
    }, 10);
  }, 400);

  const nextPlayer = function (e) {
    turn++;

    console.log(players, minutes, turn);

    cardReveal(e, turn);
  };
};

export const gameProgressionEvents = function (e) {
  startGame(e, turn);
  cardReveal(e, turn);
};
