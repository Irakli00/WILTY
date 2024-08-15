export const page = document.querySelector(".page");

export const htmls = {
  aside: `
  <aside>
    <p>
      This game is a fan-made creation and is not affiliated with or endorsed
      by the creators, producers, or broadcasters of "Would I Lie to You?".
      All rights to the original show, its format, and its content are owned
      by their respective owners. This game is made purely for entertainment
      purposes and out of admiration for the original show.
    </p>
  </aside>
  `,

  lobby: `
  <section class="lobby-section">
    <div class="lobby-container">
    </div>
    <button class="startGameBTN">Start a Game!</button>
  </section>
    `,

  addPlayer:[
    `<div class="player player-tobe player--x">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>`,
      `
      <div class="player player-tobe player--x">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
      `,
      `
      <div class="player player-tobe player--x">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
      `,
      `
      <div class="player player-tobe player--x">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
      `,
      `
      <div class="player player-tobe player--x">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
      `,
      `
      <div class="player player-tobe player--x">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
      `
  ],

  playerInputs: [
    `  
  <div class="player--input player--input--0">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline" class="accept-input accept-input--0"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `,
    `
  <div class="player--input player--input--1">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline" class="accept-input accept-input--1"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `,
  `
  <div class="player--input player--input--2">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline" class="accept-input accept-input--2"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `,
  `
  <div class="player--input player--input--3">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline" class="accept-input accept-input--3"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `,
  `
  <div class="player--input player--input--4">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline" class="accept-input accept-input--4"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `,
  `
  <div class="player--input player--input--5">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline" class="accept-input accept-input--5"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `
  ],
  card: `
  <div class="countdown"><p>5:00</p></div>
  <section class="card-section">
    <p class="player--name"></p>
    <div class="card-container card-container--init">
      <p class="card-story">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem
        deserunt commodi doloribus. Quasi voluptates temporibus dolorem illum
        voluptas labore reprehenderit
      </p>
    </div>
  </section>
  `,

  lobbyGuesses:
    `
      <section class="lobby-guess">
        <div class="lobby-guess--players">
        </div>
      </section>
    `
  ,
  lobbyGuessPlayer:`
        <div class="player--guess player--guess--0">
          <p>player X</p>
          <div>
            <button class="player--guess--T">TRUE</button>
            <button class="player--guess--L">LIE</button>
          </div>
        </div>`,

  trueOrLie: `
    <div class="true-lie">
      <div>
        <p class="player_name">---</p>
      </div>
      <div>
      <p class="true-lie--countdown">10</p>
      </div>
    </div>
`,


  startOver: `
          <div class="start-over">
          <article>
            <p>Everyone had their turn</p>
            <button class="start-over-btn">Start Over</button>
          </article>
        </div>
        `,
};

export const fakeStories = [
  `I was stuck in an elevator for 3 hours, because firemen that were to get me out, got stuck in another elevator`,
  `For me an airport security check takes twise as long, beacause of dantist's earing I swallowed in childhood`,
  `I can tell the age of a person by looking at their toenails`,
  `I decided to take Judo classes as I am sick of people cutting in line`,
  `I have ongoing beef with birds`,
  `I've got disqualified from school talent-show, because my performance was "terrifying"`,
];

export const players = [
  { name: "", story: "" },
  { name: "", story: "" },
  { name: "", story: "" },
  { name: "", story: "" },
  { name: "", story: "" },
  { name: "", story: "" },
];

export const gameMinutes = 5;
