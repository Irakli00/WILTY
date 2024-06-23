import { htmls, page, players } from "./assets.js";

const inputReveal = function (e) {
  const players = document.querySelectorAll(".player");

  const targetToChange = e.target.closest(".player");

  if (targetToChange && targetToChange.innerHTML) {
    players.forEach((el, i) => {
      if (el == targetToChange) {
        //console.log(players, targetToChange);

        targetToChange.innerHTML = htmls.playerInputs[i];

        targetToChange.querySelector(".player--input--input").focus();
      }
    });
  } //bro idunno don't touch it
};

const inputValueProcess = function (e) {
  /* console.log(inputAcceptBtn.parentElement.parentElement); */
  const inputAcceptBtn = e.target.closest(".accept-input");

  if (inputAcceptBtn) {
    const inputValue = inputAcceptBtn.parentElement.parentElement.querySelector(
      ".player--input--input"
    ).value; //lol

    console.log(inputValue);

    const player = {
      name: inputValue,
      story: "",
    };

    players.push(player);

    console.log(players);
  }
};

export const lobbyEvents = function (e) {
  inputReveal(e);
  inputValueProcess(e);
};
