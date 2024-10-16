import { htmls, page, players,  } from "./assets.js";

const inputReveal = function (e) {
  const players = document.querySelectorAll(".player");

  const targetToChange = e.target.closest(".player-tobe");


  if (targetToChange && targetToChange.innerHTML) {
    players.forEach((el, i) => {
      if (el === targetToChange) {
        targetToChange.classList.remove('player-tobe') //so it doesnt put inputs over and over again

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

  if (inputAcceptBtn && inputValue) {
    const player = {
      name: `${inputValue}`,
      story: "",
    }

    const i =
      +inputAcceptBtn.parentElement.parentElement.classList[1].slice(-1);

    players[i] = player;

    //console.log(players, players.length)    
    players[0] && players.length>=2 && additionalPlayerRender(e)
    }
    
    /* see if repeats */

    //enter key event
    page.querySelectorAll(".player--input--input").forEach(el=>{
      el.addEventListener("keydown",(e)=>{
        if(e.key == "Enter"){
          // Find the associated accept button
          const inputAcceptBtn = e.target.closest(".player--input").querySelector(".accept-input");
          if (inputAcceptBtn) {
          // Simulate a click event on the accept button to trigger the inputValueAccept function
          inputAcceptBtn.click();
        }
      }})
    })

  }

const inputValueClear = function(e){
  const xBtn = e.target.closest('.clearInput')

  if(xBtn){
    page.querySelector('.player--input').querySelector('.player--input--input').value = ''}
}

const additionalPlayerRender = function(e){
  if(players.length===6){
    return
  }

  const lol = e.target.parentElement.parentElement
  let i = lol.classList[1].slice(-1)
    
  if(i == 0){
    i=1
  }

  const htmlString = htmls.addPlayer[i]
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const element = doc.body.firstChild;
  element.classList.replace(`player--x`, `player--${+i+1}`)

  document.querySelector('.lobby-container').insertAdjacentElement('beforeend', element)

  document.querySelector('.lobby-container').scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });

}

const displayPlayer = function (e) {
  const inputAcceptBtn = e.target.closest(".accept-input");
  const container = page.querySelectorAll(".player");
  
  if (inputAcceptBtn) {
    const i =
      +inputAcceptBtn.parentElement.parentElement.classList[1].slice(-1);

    //console.log(container[i], players[i], players[players.length - 1], i);

    container[i].innerHTML = `<div>
    <div class="img-align"><ion-icon name="person-outline"></ion-icon></div>
    <div><p>${players[i].name}</p></div>`;


    /*       i >= players.length ? players[i - 1].name : players[i].name */
    container[i].classList.remove("player-tobe");
  }
};

export const lobbyEvents = function (e) {
  inputReveal(e);
  inputValueAccept(e);
  inputValueClear(e)
  displayPlayer(e);
};
