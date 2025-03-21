// обработка inline-кнопок
const cardTranslations = require("../data/cardTranslations");

function setupCallbacks(bot, tarotApi, userStates, inlineKeyboard) {
  bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;
    console.log(`Юзер нажал кнопку: "${query.data}"`);
    bot.answerCallbackQuery(query.id); // Отвечаем сразу!

    if (query.data === "/info") {
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
    } else if (query.data === "/tarot") {
      console.log("Юзер запросил случайную карту через кнопку...");
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
    } else if (query.data === "/card_prompt") {
      // Запрашиваем название карты
      bot.sendMessage(
        chatId,
        "Напиши название карты, например, Король Жезлов",
        {
          reply_to_message_id: null,
        }
      );
      // Устанавливаем состояние: юзер должен ввести название карты
      userStates.set(chatId, "waiting_for_card");
    }
  });
}

module.exports = { setupCallbacks };
