// функции для работы с API Таро
const fetch = require("node-fetch");

let tarotCards = [];

async function loadTarotCards() {
  try {
    const response = await fetch("https://tarotapi.dev/api/v1/cards");
    if (!response.ok) throw new Error(`API вернул ошибку ${response.status}`);
    const data = await response.json();
    tarotCards = data.cards || [];
    console.log(`Загружено ${tarotCards.length} карт!`);
    console.log(
      "Названия карт из API:",
      tarotCards.map((card) => card.name)
    );
  } catch (error) {
    console.log("Ошибка загрузки карт:", error);
  }
}

async function getRandomCard() {
  try {
    const response = await fetch(
      "https://tarotapi.dev/api/v1/cards/random?n=1"
    );
    if (!response.ok) throw new Error(`API вернул ошибку ${response.status}`);
    const data = await response.json();
    if (!data.cards || data.cards.length === 0)
      throw new Error("API вернул пустоту");
    return data.cards[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  loadTarotCards,
  getRandomCard,
  get tarotCards() {
    return tarotCards;
  },
};
