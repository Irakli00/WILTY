import { page } from "./assets.js";
import { startPageEvents } from "./startingPage.js";
import { lobbyEvents } from "./lobby.js";
import { gameProgressionEvents } from "./gameProcess.js";

const startGame = function () {
  page.addEventListener("click", (e) => {
    console.log(`-*-*-*-* ${e.target?.classList} *-*-*-*-`);

    startPageEvents(e);
    lobbyEvents(e);
    gameProgressionEvents(e);
  });
};

startGame();
