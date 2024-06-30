import { players, page, htmls, fakeStories } from "./assets.js";

const startGame = function (e) {
  const startBTN = "startGameBTN";

  if (e.target.classList.contains(startBTN)) {
    /* see if players are >1 */
    console.log(players);
    page.innerHTML = htmls.card;
  }
};

const cardReveal = function (e) {
  let turn = 0;
  const cardContainer = e.target.closest(".card-container");
  if (cardContainer) {
    cardContainer.classList.add("card-container--revealed");

    cardContainer.querySelector(".card-story").textContent =
      players[turn].story || fakeStories[0];
  }
};

export const gameProgressionEvents = function (e) {
  startGame(e);
  cardReveal(e);
};
