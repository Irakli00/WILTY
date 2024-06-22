import { htmls, page } from "./assets.js";

const startPlayBtn = "play-btn";
const rulesBtn = "rules-btn";
const detailsBtn = "details-btn";

const startBtnEvent = function (e) {
  if (e.target.className == startPlayBtn) {
    page.innerHTML = htmls.lobby;
  }
};

const detailsBtnEvent = function (e) {
  if (e.target.className == detailsBtn) {
    console.log(htmls.aside);
  }
};

const rulesBtnEvent = function (e) {
  if (e.target.className == rulesBtn) {
    console.log("yehaaaw");
  }
};

export const startPageEvents = function (e) {
  startBtnEvent(e);
  rulesBtnEvent(e);
  detailsBtnEvent(e);
};

/* 
const init = function () {
  startGame();
};

init(); */
