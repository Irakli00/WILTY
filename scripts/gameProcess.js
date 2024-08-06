import { players, page, htmls, fakeStories, gameMinutes } from "./assets.js";

import { startBtnEvent } from "./startingPage.js";

//make so that it shows 'NEXT PLAYER' before rendering next and 'FINAL PLAYER' at last one

let turn = 0;

const playersInLobby = function () {
  const p = [];
  players.forEach((el) => {
    const idunno = String(el.name.trim()) == false;

    !idunno && p.push(el);
  });
  return p;
};

const startCountdown = function (e, minutes) {
  let seconds = 60;
  //let minutes = gameMinutes;

  setTimeout(() => {
    minutes--;
    let intervalID = setInterval(() => {
      seconds--;
      seconds == -1 && minutes-- && (seconds = 59);

      page
        .querySelector(".countdown")
        .querySelector("p").textContent = `${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;

      if (minutes == 0 && seconds == 0) {
        clearInterval(intervalID);
        endRaund(e);
      }
    }, 10);
  }, 40);
};

const startGame = function (e, turn) {
  const startBTN = "startGameBTN";

  if (e.target.classList.contains(startBTN)) {
    turn == 0;
    introduceCard(e, turn);
  }
};

const introduceCard = function (e, turn) {
  if (turn == playersInLobby().length) {
    thatsAllFolks(e);
    return;
  }

  console.log(players, playersInLobby(), turn);
  page.innerHTML = htmls.card;

  page.querySelector(".player--name").textContent =
    playersInLobby()[turn].name + ":";
  /* colors should be same as inputs */
};

const cardReveal = function (e, turn) {
  const cardContainer = e.target.closest(".card-container--init");
  if (cardContainer) {
    cardContainer.classList.toggle("card-container--revealed");

    cardContainer.classList.toggle("card-container--init"); //to avoid more than one countdown

    /* adding story */
    const random_I = Math.floor(Math.random() * fakeStories.length);

    cardContainer.querySelector(".card-story").textContent =
      playersInLobby()[turn].story || fakeStories[random_I];

    startCountdown(e, gameMinutes);
  }
};

const endRaund = function (e) {
  turn++;
  closeCard(e, turn);
  console.log("ended", turn);
};

const closeCard = function (e, turn) {
  const activeCard = e.target.closest(".card-container");
  //console.log(activeCard);

  activeCard.classList.remove("card-container--revealed");
  activeCard.classList.add("card-container--fin");

  activeCard.addEventListener("click", () => {
    //cardRemoved();
    introduceCard(e, turn);
  });

  setTimeout(() => {
    cardRemoved();

    setTimeout(() => {
      activeCard.insertAdjacentHTML("afterend", htmls.trueOrLie);

      document
        .querySelector(".true-lie")
        .querySelector(".player_name").innerHTML = `Time to guess!<br>
      ${playersInLobby()[turn - 1].name}, was it a truth, or was it a lie?`;

      let targetP = document
        .querySelector(".true-lie")
        .querySelector(".true-lie--countdown");

      let trueLieIntervalID = setInterval(() => {
        var seconds = targetP.textContent;
        targetP.textContent--; //lol

        seconds - 1 == 0 && clearInterval(trueLieIntervalID) && endRaund();

        activeCard.innerHTML = "";

        seconds - 1 == 0 && targetP.textContent == 0 && introduceCard(e, turn);
      }, 100);
    }, 2000); //animation timer (temp)
  }, 2000);
};

const cardRemoved = function () {
  // console.log(turn, page.querySelector(".card-container--fin").classList);

  page.querySelector(".card-container").classList.add("card-container--end");
};

const thatsAllFolks = function (e) {
  console.log("thats all folks");
  page.innerHTML = htmls.startOver;
  turn = 0;
};

export const gameProgressionEvents = function (e) {
  startGame(e, turn);
  cardReveal(e, turn);
};
