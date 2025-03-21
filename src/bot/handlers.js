// обработчики команд (/start, /info, /help, /tarot, /card) и реакции на сообщения.
const cardTranslations = require("../data/cardTranslations");

const inlineKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "Список карт", callback_data: "/info" }],
      [{ text: "Случайная карта", callback_data: "/tarot" }],
      [{ text: "Узнать значение карты", callback_data: "/card_prompt" }],
    ],
  },
};

// Состояние юзеров
const userStates = new Map(); // Cостояние: { chatId: "waiting_for_card" }

function setupHandlers(bot, tarotApi) {
  // Команда /start
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Привет! Это бот по Таро. Жми кнопки или пиши команды!",
      {
        ...inlineKeyboard,
        reply_to_message_id: null,
      }
    );
  });

  // Команда /info
  bot.onText(/\/info/, async (msg) => {
    const chatId = msg.chat.id;
    if (tarotApi.tarotCards.length === 0) {
      bot.sendMessage(chatId, "Карты еще не загрузились, подожди немного!", {
        ...inlineKeyboard,
        reply_to_message_id: null,
      });
      return;
    }
    let message = "\nВсе карты (пиши их в /card):\n";
    const cardList = tarotApi.tarotCards
      .map((card) => cardTranslations[card.name].ruName)
      .join("\n");
    const fullMessage = message + cardList;
    if (fullMessage.length > 4096) {
      const parts = fullMessage.match(/(.|[\r\n]){1,4096}/g);
      for (const part of parts) {
        await bot.sendMessage(chatId, part, {
          ...inlineKeyboard,
          reply_to_message_id: null,
        });
      }
    } else {
      bot.sendMessage(chatId, fullMessage, {
        ...inlineKeyboard,
        reply_to_message_id: null,
      });
    }
  });

  // Команда /help
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Список команд:\n/start - начать\n/help - помощь\n/info - список карт\n/tarot - вытянуть карту\n/card [название] - узнать значение (например, /card Дурак)",
      { ...inlineKeyboard, reply_to_message_id: null }
    );
  });

  // Команда /tarot
  bot.onText(/\/tarot/, async (msg) => {
    const chatId = msg.chat.id;
    console.log("Юзер запросил случайную карту...");
    try {
      const card = await tarotApi.getRandomCard();
      const translation = cardTranslations[card.name];
      const message =
        `Ты вытянул карту!\n\n` +
        `Название: ${translation.ruName}\n` +
        `Прямое значение: ${translation.meaning_up}\n` +
        `Перевернутое значение: ${translation.meaning_rev}`;
      bot.sendMessage(chatId, message, {
        ...inlineKeyboard,
        reply_to_message_id: null,
      });
    } catch (error) {
      console.log("Ошибка при запросе:", error);
      bot.sendMessage(
        chatId,
        error.message === "API вернул пустоту"
          ? "API вернул пустоту. Попробуй еще раз."
          : "API глючит! Попробуй еще раз.",
        {
          ...inlineKeyboard,
          reply_to_message_id: null,
        }
      );
    }
  });

  // Команда /card
  bot.onText(/\/card (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const cardName = match[1].trim(); // Убираем лишние пробелы
    console.log(`Юзер запросил карту через /card: "${cardName}"`);

    if (tarotApi.tarotCards.length === 0) {
      bot.sendMessage(chatId, "Карты еще не загрузились, подожди немного!", {
        ...inlineKeyboard,
        reply_to_message_id: null,
      });
      return;
    }

    // Ищем карту, игнорируя регистр
    const card = tarotApi.tarotCards.find((card) => {
      const translation = cardTranslations[card.name];
      const ruNameLower = translation.ruName.toLowerCase();
      const nameLower = card.name.toLowerCase();
      const queryLower = cardName.toLowerCase();
      return ruNameLower === queryLower || nameLower === queryLower;
    });

    if (!card) {
      bot.sendMessage(
        chatId,
        `Карта "${cardName}" не найдена! Проверь название в /info.\n\nРекомендую использовать кнопку "Узнать значение карты" для удобства!`,
        {
          ...inlineKeyboard,
          reply_to_message_id: null,
        }
      );
      return;
    }

    const translation = cardTranslations[card.name];
    const message =
      `Карта: ${translation.ruName}\n\n` +
      `Прямое значение: ${translation.meaning_up}\n` +
      `Перевернутое значение: ${translation.meaning_rev}\n\n` +
      `Рекомендую использовать кнопку "Узнать значение карты" для удобства!`;
    bot.sendMessage(chatId, message, {
      ...inlineKeyboard,
      reply_to_message_id: null,
    });
  });

  // Реакция на текст без команд
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Пропускаем, если это не текст или это команда
    if (!text || text.startsWith("/")) return;

    // Проверяем состояние юзера
    const userState = userStates.get(chatId);

    if (userState === "waiting_for_card") {
      // Юзер ввёл название карты
      const cardName = text.trim(); // Убираем лишние пробелы
      console.log(`Юзер ввёл название карты: "${cardName}"`);

      if (tarotApi.tarotCards.length === 0) {
        bot.sendMessage(chatId, "Карты еще не загрузились, подожди немного!", {
          ...inlineKeyboard,
          reply_to_message_id: null,
        });
        userStates.delete(chatId); // Сбрасываем состояние
        return;
      }

      // Ищем карту, игнорируя регистр
      const card = tarotApi.tarotCards.find((card) => {
        const translation = cardTranslations[card.name];
        const ruNameLower = translation.ruName.toLowerCase();
        const nameLower = card.name.toLowerCase();
        const queryLower = cardName.toLowerCase();
        return ruNameLower === queryLower || nameLower === queryLower;
      });

      if (!card) {
        bot.sendMessage(
          chatId,
          `Карта "${cardName}" не найдена! Проверь название в списке карт.`,
          {
            ...inlineKeyboard,
            reply_to_message_id: null,
          }
        );
        userStates.delete(chatId); // Сбрасываем состояние
        return;
      }

      const translation = cardTranslations[card.name];
      const message =
        `Карта: ${translation.ruName}\n\n` +
        `Прямое значение: ${translation.meaning_up}\n` +
        `Перевернутое значение: ${translation.meaning_rev}`;
      bot.sendMessage(chatId, message, {
        ...inlineKeyboard,
        reply_to_message_id: null,
      });

      // Сбрасываем состояние после обработки
      userStates.delete(chatId);
    } else {
      // Обычный текст, не связанный с запросом карты
      bot.sendMessage(
        chatId,
        `Ты написал: "${text}". Жми кнопки или пиши команды!`,
        {
          ...inlineKeyboard,
          reply_to_message_id: null,
        }
      );
    }
  });
}

module.exports = { setupHandlers, userStates, inlineKeyboard };
