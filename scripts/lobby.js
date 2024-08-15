import { htmls, page, players,  } from "./assets.js";

const inputReveal = function (e) {
  const players = document.querySelectorAll(".player");

  const targetToChange = e.target.closest(".player-tobe");

  if (targetToChange && targetToChange.innerHTML) {
    players.forEach((el, i) => {
      if (el == targetToChange) {

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

additionalPlayerRender(e)
    }
    
    /* see if repeats */
  }

const additionalPlayerRender = function(e){
  //const players = document.querySelectorAll(".player");

  const lol = e.target.parentElement.parentElement
  var i = lol.classList[1].slice(-1)

  //console.log(lol.classList,i)

  if (i>=1){
    const htmlString = htmls.addPlayer[i]
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const element = doc.body.firstChild;
    element.classList.replace(`player--x`, `player--${+i+1}`)

    document.querySelector('.lobby-container').insertAdjacentElement('beforeend', element)
  }

}

const displayPlayer = function (e) {
  const inputAcceptBtn = e.target.closest(".accept-input");
  const container = page.querySelectorAll(".player");

  if (inputAcceptBtn) {
    const i =
      +inputAcceptBtn.parentElement.parentElement.classList[1].slice(-1);

    //console.log(container[i], players[i], players[players.length - 1], i);

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
