import { htmls, page } from "./assets.js";

const first = function (e) {
  const players = document.querySelectorAll(".player");

  if (e.target.classList.contains("player")) {
    players.forEach((el) => {
      console.log(el.classList[1]);
    });
  }
};

export const lobbyEvents = function (e) {
  first(e);
};
