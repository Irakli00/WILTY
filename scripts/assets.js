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
      <div class="player player--0">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
      <div class="player player--1">
        <div>
          <div><ion-icon name="person-outline"></ion-icon></div>
          <div><p>Add a Player</p></div>
        </div>
        <div><ion-icon name="add-outline"></ion-icon></div>
      </div>
    </div>
    <button>Start a Game!</button>
  </section>
    `,

  playerInputs: [
    `  
  <div class="player--input player--input--0">
    <div>
      <ion-icon name="person-outline"></ion-icon>
      <input type="text" class="player--input--input" />
    </div>
    <div>
      <ion-icon name="checkmark-outline"></ion-icon>
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
      <ion-icon name="checkmark-outline"></ion-icon>
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
  `,
  ],
  card: `
  <section>
    <div class="card-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem
        deserunt commodi doloribus. Quasi voluptates temporibus dolorem illum
        voluptas labore reprehenderit
      </p>
    </div>
  </section>
  `,
};

const fakeStories = [
  `I was stuck in an elevator for 3 hours, because firemen that were to get me out, got stuck in another elevator`,
  `For me an airport security check takes twise as long beacause of dantist earing I swallowed in childhood`,
  `I can tell the age of a person by looking at their toenails`,
  `I decided to take Judo class as I am sick of people cutting a line`,
  `I have ongoing beef with birds`,
  `I've got disqualified from school talent-show, because my performance was "terrifying"`,
];

const trueStories = {
  name: "story",
};
