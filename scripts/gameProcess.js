import { players, page, htmls, fakeStories, gameMinutes } from "./assets.js";

let turn = 0;

const spreadColor = function(e){
    const bgc = window.getComputedStyle(e.target).backgroundColor
    e.target.parentElement.style.backgroundColor = bgc
}

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
  }, 5000);
};

const startGame = function (e) {
  const startBTN = "startGameBTN";

  if (e.target.classList.contains(startBTN)) {
    turn = 0;
    introduceCard(e, turn);
  }
};

const introduceCard = function (e, turn) {
  if (turn === players.length) {
    thatsAllFolks(e);
    return;
  }

  console.log(players,turn);
  page.innerHTML = htmls.card;

  if(players[turn]){
  page.querySelector(".player--name").textContent =
    players[turn].name + ":";
  /* colors should be same as inputs */}
  else{
    turn+=1
    introduceCard(e,turn)
  }
};

const cardReveal = function (e, turn) {
  const cardContainer = e.target.closest(".card-container--init");

  if (cardContainer) {
    cardContainer.classList.toggle("card-container--revealed");

    cardContainer.classList.toggle("card-container--init"); //to avoid more than one countdown

    /* adding story */
    const random_I = Math.floor(Math.random() * fakeStories.length);

    cardContainer.querySelector(".card-story").textContent =
    players[turn].story || fakeStories[random_I];    

    startCountdown(e, gameMinutes);
  }
};

const endRaund = function (e) {
  turn++;
  closeCard(e, turn);
};

const closeCard = function (e, turn) {
  const activeCard = e.target.closest(".card-container");
  //console.log(activeCard);

  activeCard.classList.remove("card-container--revealed");
  activeCard.classList.add("card-container--fin");

  activeCard.addEventListener("click", () => {
    introduceCard(e, turn);
  });

  setTimeout(() => {
    cardRemoved();
    true_lieGuesses(e)
  }, 2000);
};

const true_lieGuesses = function(e){
  let playerGuessed = 0

    setTimeout(() => {
      e.target.closest(".card-container").insertAdjacentHTML("afterend", htmls.lobbyGuesses);


      const playersToGuess = players.filter(el=>
        el !== players[turn-1]
      )

      console.log(players, playersToGuess)

      playersToGuess.forEach((_,i)=>{

        document.querySelector('.lobby-guess--players').innerHTML+=
        htmls.lobbyGuessPlayer

        const playerEl =document.querySelectorAll('.player--guess')
        playerEl[i].querySelector('p').textContent = playersToGuess[i].name
      })

      const trueBTNS = document.querySelectorAll('.player--guess--T')
      const lieBTNS = document.querySelectorAll('.player--guess--L')

      // console.log(trueBTNS,lieBTNS)

      trueBTNS.forEach(el=>{
        el.addEventListener('click',(e)=>{
          playerGuessed++
          spreadColor(e)
          e.target.parentElement.querySelector('.player--guess--L').style.display = 'none'

          if(playerGuessed== playersToGuess.length){
            reveal(e)
          }
      })
      })

      lieBTNS.forEach(el=>{
      el.addEventListener('click',(e)=>{
        playerGuessed++
        spreadColor(e)
        e.target.parentElement.querySelector('.player--guess--T').style.display = 'none'
        if(playerGuessed== playersToGuess.length){
          reveal(e)
        }
      })
    })
    }, 2000); //animation timer (temp)

}

const reveal = function(e){ //shity overall
  page.innerHTML = htmls.trueOrLie

  const workingArea = document
    .querySelector(".true-lie")

  workingArea.querySelector(".player_name").innerHTML = `
    ${players[turn - 1].name}, would you tell as, was it a truth, or was it a lie?`;


  workingArea.querySelectorAll('button').forEach(el=>{
  el.addEventListener('click',(e)=>{
    spreadColor(e) //maybe make it remove sibling?? hmmmm
    if(e.target.className == "reveal-T"){
      workingArea.querySelector('.reveal-L').style.display = "none"
      workingArea.querySelector('.reveal-T').style.fontSize = '2rem'
    }else{
      workingArea.querySelector('.reveal-T').style.display = "none"
      workingArea.querySelector('.reveal-L').style.fontSize = '2rem' //e.target?
    }
  })
  })


  //introduce next card (problematic)
  workingArea.querySelectorAll('button').forEach(el=>{
    el.addEventListener('click',()=>{
      if (turn == players.length) {
        thatsAllFolks(e);
        return;}

      const area = document.querySelector('.true-lie')
      area.style.backgroundColor = 'transparent'
      area.innerHTML = `<p class="next">${(turn+1 == players.length)?"Final":"Next"} Player</p>`   
      
              
      setTimeout(()=>{
        introduceCard(e,turn)
      },2000)
    })

  })
}

const cardRemoved = function () {
  page.querySelector(".card-container").classList.add("card-container--end");
};

const thatsAllFolks = function (e) {
  page.innerHTML = htmls.startOver;
  turn = 0;
};

export const gameProgressionEvents = function (e) {
  startGame(e, turn);
  //console.log(turn) //doesnt increase
  cardReveal(e, turn);
};
