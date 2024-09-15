import { htmls, page } from "./assets.js";

const startPlayBtn = "play-btn";
const rulesBtn = "rules-btn";
const detailsBtn = "details-btn";

export const startBtnEvent = function (e) {
  if (
    e.target.className == startPlayBtn ||
    e.target.className == "start-over-btn"
  ) {

    const elem = document.documentElement; // Selects the whole document (the HTML element)
  
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
      elem.msRequestFullscreen();}

    page.innerHTML = htmls.lobby;

    renderInputs()
  }
};

const renderInputs = function(){
  const lobby= document.querySelector('.lobby-container')
 
   htmls.addPlayer.forEach((p,i)=>{

    if(i>=2){
      return
    }

    const htmlString = p
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const element = doc.body.firstChild;

    element.classList.replace(`player--x`, `player--${i}`)
    //console.log(element,element.classList) //lol!!

     lobby.insertAdjacentElement('beforeend', element)
   })
 }

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
