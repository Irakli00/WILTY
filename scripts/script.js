import { htmls, page } from "./assets.js";
import { startPageEvents } from "./startingPage.js";
import { lobbyEvents } from "./lobby.js";
import { gameProgressionEvents } from "./gameProcess.js";

let turn = 0;

/* demo sign dissapears */

const putInLandscape = function(){ //ოპაციტყ ის გოოდ ბუტ მაკე ბტნს უნინტერაცტაბლე ტოო (იფ ჰეიგჰტ 0 იზნტ ენაუგჰ)
  if (!window.matchMedia("(orientation: landscape)").matches) {
    console.log('before',[...page.children]);

    [...page.children].forEach(el=>{
      el.style.opacity = 0
      el.style.height = 0
    })

  //!page.querySelector('.rotate-phone-bro') && page.insertAdjacentHTML('beforeend',htmls.notLandscape)
  
  page.insertAdjacentHTML('beforeend',htmls.notLandscape)

  console.log('after',[...page.children]);

  }else{
    if(page.querySelector('.rotate-phone-bro')){

      page.querySelector('.rotate-phone-bro').style.display = 'none';

      page.removeChild(page.querySelector('.rotate-phone-bro'));

      //page.innerHTML= htmls.startingPage;

      console.log('else before',[...page.children]);

      [...page.children].forEach(el=>{
        el.style.opacity = 1
        el.style.height = ''
      })

      console.log('else after',[...page.children]);
    }
  }
}

const startGame = function () {
  if (!window.matchMedia("(orientation: landscape)").matches) {
    [...page.children].forEach(el=>{
      el.style.opacity = 0
      el.style.height = 0
    })
  
    page.insertAdjacentHTML('beforeend', htmls.notLandscape)
  }
    //if loaded in verticaly

  window.addEventListener('resize',()=>putInLandscape())

  page.addEventListener("click", (e) => {
    startPageEvents(e);
    lobbyEvents(e);
    gameProgressionEvents(e, turn);
  });
};

document.querySelector('.fullscreen').addEventListener('click',()=>{

  const elem = document.documentElement; // Selects the whole document (the HTML element)
  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
})

startGame();
