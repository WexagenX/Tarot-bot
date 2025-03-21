# Tarot Bot

Tarot Bot — это Telegram-бот, который помогает пользователям узнавать значения карт Таро, вытягивать случайные карты и получать список всех карт. Бот написан на Node.js с использованием библиотеки `node-telegram-bot-api` и взаимодействует с API `tarotapi.dev` для получения данных о картах.

## Основные функции
- **Список карт:** Команда `/info` показывает список всех карт Таро.
- **Случайная карта:** Команда `/tarot` или кнопка "Случайная карта" вытягивает случайную карту и показывает её значение.
- **Значение карты:** Команда `/card [название]` или кнопка "Узнать значение карты" позволяет узнать значение конкретной карты (например, `/card Король Жезлов`).
- **Интерактивность:** Inline-кнопки для удобного взаимодействия без ввода команд.
- **Локализация:** Названия и значения карт переведены на русский язык.

## Требования
- **Node.js**: Версия 14.x или выше.
- **npm**: Для установки зависимостей.
- Telegram-бот токен.

## Как установить
1. Склонируй репозиторий с GitHub:
   ```bash
   git clone https://github.com/твой_юзернейм/tarot-bot.git
   cd tarot-bot
   
2. Установи нужные библиотеки:
   ```bash
   npm install

3. Создай файл src/config.js с токеном бота:
```bash
//Токен тг бота вставлять сюда src/config.js
module.exports = {
    botToken: "ВАШ_ТОКЕН_BOTFATHER",
    tarotApiUrl: "https://tarotapi.dev/api/v1",
};
```
Замени ВАШ_ТОКЕН_ОТ_BOTFATHER на токен, который ты получил от @BotFather в Telegram.\

Запусти бота:
```bash
npm start
```
Открой Telegram, найди своего бота и напиши "/start"

## Структура проекта
- **src/ — тут весь код.
- **bot/ — код для работы с Telegram (команды, кнопки).
-**data/ — переводы карт на русский язык.
-**utils/ — работа с API Таро.
-**index.js — запуск бота.
-**package.json — список нужных библиотек и команды для запуска.
-**.gitignore — чтобы не загружать лишние файлы (например, node_modules и src/config.js).
-**README.md — этот файл с инструкцией.





