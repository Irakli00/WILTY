import { page } from "./assets.js";
import { startPageEvents } from "./startingPage.js";
import { lobbyEvents } from "./lobby.js";
import { gameProgressionEvents } from "./gameProcess.js";

let turn = 0;

/* demo sign dissapears */

const startGame = function () {
  page.addEventListener("click", (e) => {
    console.log(`-*-*-*-* ${e.target?.classList} *-*-*-*-`);

    startPageEvents(e);
    lobbyEvents(e);
    gameProgressionEvents(e, turn);
  });
};

startGame();
