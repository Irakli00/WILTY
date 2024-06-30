import { htmls, page, players } from "./assets.js";

const inputReveal = function (e) {
  const players = document.querySelectorAll(".player");

  const targetToChange = e.target.closest(".player-tobe");

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

const inputValueAccept = function (e) {
  const inputAcceptBtn = e.target.closest(".accept-input");

  const inputValue = inputAcceptBtn?.parentElement.parentElement.querySelector(
    ".player--input--input"
  ).value; //lol

  if (inputAcceptBtn) {
    const player = {
      name: `${inputValue}`,
      story: "",
    };

    /*   players.push(player); */
    const i =
      +inputAcceptBtn.parentElement.parentElement.classList[1].slice(-1);

    players[i] = player;

    console.log(players);

    /* see if repeats */
  }
};

const displayPlayer = function (e) {
  const inputAcceptBtn = e.target.closest(".accept-input");
  const container = page.querySelectorAll(".player");

  if (inputAcceptBtn) {
    const i =
      +inputAcceptBtn.parentElement.parentElement.classList[1].slice(-1);

    console.log(container[i], players[i], players[players.length - 1], i);

    container[i].innerHTML = `<div>
    <div><ion-icon name="person-outline"></ion-icon></div>
    <div><p>${players[i].name}</p></div>`;

    /*       i >= players.length ? players[i - 1].name : players[i].name */
    container[i].classList.remove("player-tobe");
  }
};

export const lobbyEvents = function (e) {
  inputReveal(e);
  inputValueAccept(e);
  displayPlayer(e);
};
