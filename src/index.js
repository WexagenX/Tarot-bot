// Запуск бота
const { initializeBot } = require("./bot");
const tarotApi = require("./utils/tarotApi");
const config = require("./config");

const token = config.botToken;

async function startBot() {
  console.log("Бот запускается...");

  // Загружаем карты
  await tarotApi.loadTarotCards();

  // Инициализируем бота
  initializeBot(token, tarotApi);

  console.log("Бот готов к работе!");
}

startBot();
