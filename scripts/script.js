import { htmls, page } from "./assets.js";
import { startPageEvents } from "./startingPage.js";
import { lobbyEvents } from "./lobby.js";
import { gameProgressionEvents } from "./gameProcess.js";

let turn = 0;

/* demo sign dissapears */

const putInLandscape = function(){
  if (!window.matchMedia("(orientation: landscape)").matches) {
    page.innerHTML = htmls.notLandscape
  }else{
    if(page.querySelector('.rotate-phone-bro')){
      page.innerHTML= htmls.startingPage 
    }
  }
}

const startGame = function () {
  if (!window.matchMedia("(orientation: landscape)").matches) {
    page.innerHTML = htmls.notLandscape
  }

  window.addEventListener('resize',()=>putInLandscape())

  page.addEventListener("click", (e) => {
    startPageEvents(e);
    lobbyEvents(e);
    gameProgressionEvents(e, turn);
  });
};
startGame();
