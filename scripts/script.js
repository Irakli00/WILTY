import { page } from "./assets.js";
import { startPageEvents } from "./startingPage.js";
import { lobbyEvents } from "./lobby.js";

const startGame = function () {
  page.addEventListener("click", (e) => {
    console.log(`-*-*-*-* ${e.target?.classList} *-*-*-*-`);

    startPageEvents(e);
    lobbyEvents(e);
  });
};

const init = function () {
  startGame();
};

init();
