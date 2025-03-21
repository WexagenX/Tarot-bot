// инициализация бота и подключениие обработчиков

const TelegramBot = require("node-telegram-bot-api");
const { setupHandlers, userStates, inlineKeyboard } = require("./handlers");
const { setupCallbacks } = require("./callbacks");

function initializeBot(token, tarotApi) {
  const bot = new TelegramBot(token, { polling: true });

  // Обработка ошибок polling
  bot.on("polling_error", (error) => {
    console.log("Polling ошибка:", error.message);
  });

  // Подключаем обработчики команд и сообщений
  setupHandlers(bot, tarotApi);

  // Подключаем обработчики inline-кнопок
  setupCallbacks(bot, tarotApi, userStates, inlineKeyboard);

  return bot;
}

module.exports = { initializeBot };
