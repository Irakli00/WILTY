import { htmls, page } from "./assets.js";

const first = function (e) {
  const players = document.querySelectorAll(".player");

  const targetToChange = e.target.closest(".player");

  if (targetToChange && targetToChange.innerHTML) {
    players.forEach((el, i) => {
      if (el == targetToChange) {
        console.log(players, targetToChange);

        targetToChange.innerHTML = htmls.playerInputs[i];

        targetToChange.querySelector(".player--input--input").focus();
      }
    });
  } //bro iddunno don't touch it
};

export const lobbyEvents = function (e) {
  first(e);
};
