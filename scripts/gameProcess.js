import { players, page, htmls, fakeStories, gameMinutes } from "./assets.js";

let turn = 0;

const startGame = function (e, turn) {
  const startBTN = "startGameBTN";
  if (e.target.classList.contains(startBTN)) {
    introduceCard(e, turn);
  }
};

const introduceCard = function (e) {
  console.log(players);
  page.innerHTML = htmls.card;

  page.querySelector(".player--name").textContent = players[turn].name + ":";
  /* colors should be same as inputs */
};

const cardReveal = function (e, turn) {
  const cardContainer = e.target.closest(".card-container--init");
  if (cardContainer) {
    cardContainer.classList.toggle("card-container--revealed");

    cardContainer.classList.toggle("card-container--init"); //to avoid more than one countdown

    /* adding story */
    const random_I = Math.floor(Math.random() * fakeStories.length);

    cardContainer.querySelector(".card-story").textContent =
      players[turn].story || fakeStories[random_I];

    startCountdown(e, gameMinutes);
  }
};

const startCountdown = function (e, minutes) {
  let seconds = 60;
  //let minutes = gameMinutes;

  setTimeout(() => {
    minutes--;
    let intervalID = setInterval(() => {
      seconds--;
      seconds == -1 && minutes-- && (seconds = 59);

      page
        .querySelector(".countdown")
        .querySelector("p").textContent = `${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;

      if (minutes == 0 && seconds == 0) {
        clearInterval(intervalID);
        endRaund(e);
      }
    }, 1000);
  }, 4000);
};

const endRaund = function (e) {
  turn++;
  closeCard(e, turn);
};

const closeCard = function (e, turn) {
  const activeCard = e.target.closest(".card-container");
  console.log(activeCard);

  activeCard.classList.remove("card-container--revealed");
  activeCard.classList.add("card-container--fin");

  setTimeout(() => {
    console.log(turn, page.querySelector(".card-container--fin").classList);

    page.querySelector(".card-container").classList.add("card-container--end");

    setTimeout(() => {
      introduceCard();
    }, 2000); //animation timer (temp)
  }, 4000);
};

export const gameProgressionEvents = function (e) {
  startGame(e, turn);
  cardReveal(e, turn);
};
