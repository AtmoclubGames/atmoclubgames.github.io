// Константы для количества карт в колоде и количества игроков
const DECK_SIZE = 52;
const NUM_PLAYERS = 2;

// Создаем массив с именами карт и мастью
const deck = [
  "2 of Hearts",
  "3 of Hearts",
  "4 of Hearts",
  "5 of Hearts",
  "6 of Hearts",
  "7 of Hearts",
  "8 of Hearts",
  "9 of Hearts",
  "10 of Hearts",
  "Jack of Hearts",
  "Queen of Hearts",
  "King of Hearts",
  "Ace of Hearts",
  "2 of Clubs",
  "3 of Clubs",
  "4 of Clubs",
  "5 of Clubs",
  "6 of Clubs",
  "7 of Clubs",
  "8 of Clubs",
  "9 of Clubs",
  "10 of Clubs",
  "Jack of Clubs",
  "Queen of Clubs",
  "King of Clubs",
  "Ace of Clubs",
  "2 of Spades",
  "3 of Spades",
  "4 of Spades",
  "5 of Spades",
  "6 of Spades",
  "7 of Spades",
  "8 of Spades",
  "9 of Spades",
  "10 of Spades",
  "Jack of Spades",
  "Queen of Spades",
  "King of Spades",
  "Ace of Spades",
  "2 of Diamonds",
  "3 of Diamonds",
  "4 of Diamonds",
  "5 of Diamonds",
  "6 of Diamonds",
  "7 of Diamonds",
  "8 of Diamonds",
  "9 of Diamonds",
  "10 of Diamonds",
  "Jack of Diamonds",
  "Queen of Diamonds",
  "King of Diamonds",
  "Ace of Diamonds"
];

// Перемешиваем колоду
shuffle(deck);

// Создаем массивы для хранения карт на руках игроков и колоды
const playerHands = [];
const deckCards = [];

// Раздаем карты игрокам
for (let i = 0; i < NUM_PLAYERS; i++) {
  playerHands.push([]);
  for (let j = i; j < DECK_SIZE; j += NUM_PLAYERS) {
    playerHands[i].push(deck[j]);
  }
}

// Определяем здоровье игроков
const playerHealth = [20, 20];

// Функция перемещения карты между игроками
function moveCard(fromPlayer, toPlayer, cardIndex) {
  // Удаляем карту из руки первого игрока
  const card = playerHands[fromPlayer].splice(cardIndex, 1)[0];
  // Добавляем карту в руку второго игрока
  playerHands[toPlayer].push(card);
}

// Функция для определения победителя
function getWinner() {
  if (playerHealth[0] <= 0) {
    return "Player 2";
  } else if (playerHealth[1] <= 0) {
    return "Player 1";
  } else {
    return null;
  }
}

// Функция для перемешивания колоды
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]];}}
