const suits = ["♥", "♣", "♦", "♠"];
const value = {
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  10: "J",
  10: "Q",
  10: "K",
  10: "A",
};

const createDeck = () => {
  let deck = [];

  for (let i = 0; i < 4; i++) {
    for (let n = 0; n < 13; n++) {
      deck.push(value[n] + suits[i]);
    }
  }

  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
};

let wholeDeck = createDeck();

shuffleDeck(wholeDeck);

let playerHand;
let dealerHand;

let deal = (wholeDeck) => {
  let playerHand = [
    wholeDeck[Math.floor(Math.random() * wholeDeck.length)],
    wholeDeck[Math.floor(Math.random() * wholeDeck.length)],
  ];
  let dealerHand = [
    wholeDeck[Math.floor(Math.random() * wholeDeck.length)],
    wholeDeck[Math.floor(Math.random() * wholeDeck.length)],
  ];
};

deal(wholeDeck);
