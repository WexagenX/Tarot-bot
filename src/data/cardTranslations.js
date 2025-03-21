// перевод карт и значения
const cardTranslations = {
  "The Fool": {
    ruName: "Дурак",
    meaning_up: "Новое начало, невинность, спонтанность",
    meaning_rev: "Задержка, безрассудство",
  },
  "The Magician": {
    ruName: "Маг",
    meaning_up: "Проявление, изобретательность",
    meaning_rev: "Манипуляция, плохое планирование",
  },
  "The High Priestess": {
    ruName: "Верховная Жрица",
    meaning_up: "Интуиция, тайны, подсознание",
    meaning_rev: "Скрытые мотивы, нерешительность",
  },
  "The Empress": {
    ruName: "Императрица",
    meaning_up: "Плодородие, изобилие, забота",
    meaning_rev: "Зависимость, пустота",
  },
  "The Emperor": {
    ruName: "Император",
    meaning_up: "Авторитет, структура, контроль",
    meaning_rev: "Тирания, хаос",
  },
  "The Hierophant": {
    ruName: "Иерофант",
    meaning_up: "Традиция, духовность, наставничество",
    meaning_rev: "Бунт, догматизм",
  },
  "The Lovers": {
    ruName: "Влюбленные",
    meaning_up: "Любовь, гармония, выбор",
    meaning_rev: "Разлад, дисбаланс",
  },
  "The Chariot": {
    ruName: "Колесница",
    meaning_up: "Воля, успех, движение",
    meaning_rev: "Потеря контроля, застой",
  },
  Fortitude: {
    ruName: "Сила",
    meaning_up: "Мужество, внутренняя сила, терпение",
    meaning_rev: "Слабость, сомнения",
  },
  "The Hermit": {
    ruName: "Отшельник",
    meaning_up: "Мудрость, одиночество, поиск",
    meaning_rev: "Изоляция, отчуждение",
  },
  "Wheel Of Fortune": {
    ruName: "Колесо Фортуны",
    meaning_up: "Удача, перемены, судьба",
    meaning_rev: "Неудача, сопротивление переменам",
  },
  Justice: {
    ruName: "Справедливость",
    meaning_up: "Честность, равновесие, закон",
    meaning_rev: "Несправедливость, уклонение",
  },
  "The Hanged Man": {
    ruName: "Повешенный",
    meaning_up: "Жертва, сдача, новый взгляд",
    meaning_rev: "Застой, сопротивление",
  },
  Death: {
    ruName: "Смерть",
    meaning_up: "Переход, конец, трансформация",
    meaning_rev: "Страх перемен, стагнация",
  },
  Temperance: {
    ruName: "Умеренность",
    meaning_up: "Баланс, терпение, гармония",
    meaning_rev: "Дисбаланс, излишества",
  },
  "The Devil": {
    ruName: "Дьявол",
    meaning_up: "Зависимость, материализм, иллюзии",
    meaning_rev: "Освобождение, выход",
  },
  "The Tower": {
    ruName: "Башня",
    meaning_up: "Крушение, откровение, хаос",
    meaning_rev: "Избежание катастрофы, страх",
  },
  "The Star": {
    ruName: "Звезда",
    meaning_up: "Надежда, вдохновение, исцеление",
    meaning_rev: "Отчаяние, потеря веры",
  },
  "The Moon": {
    ruName: "Луна",
    meaning_up: "Иллюзии, страх, подсознание",
    meaning_rev: "Ясность, истина",
  },
  "The Sun": {
    ruName: "Солнце",
    meaning_up: "Радость, успех, жизненная сила",
    meaning_rev: "Пессимизм, задержка",
  },
  "The Last Judgment": {
    ruName: "Суд",
    meaning_up: "Пробуждение, решение, обновление",
    meaning_rev: "Самоосуждение, промедление",
  },
  "The World": {
    ruName: "Мир",
    meaning_up: "Завершение, гармония, целостность",
    meaning_rev: "Незавершенность, препятствия",
  },
  "Ace of Wands": {
    ruName: "Туз Жезлов",
    meaning_up: "Вдохновение, новая энергия",
    meaning_rev: "Задержки, отсутствие страсти",
  },
  "Two of Wands": {
    ruName: "Двойка Жезлов",
    meaning_up: "Планирование, выбор пути",
    meaning_rev: "Страх перемен, нерешительность",
  },
  "Three of Wands": {
    ruName: "Тройка Жезлов",
    meaning_up: "Рост, дальновидность",
    meaning_rev: "Препятствия, задержки",
  },
  "Four of Wands": {
    ruName: "Четверка Жезлов",
    meaning_up: "Праздник, стабильность",
    meaning_rev: "Напряжение, нестабильность",
  },
  "Five of Wands": {
    ruName: "Пятерка Жезлов",
    meaning_up: "Конкуренция, борьба",
    meaning_rev: "Избежание конфликта, мир",
  },
  "Six of Wands": {
    ruName: "Шестерка Жезлов",
    meaning_up: "Победа, признание",
    meaning_rev: "Неуверенность, провал",
  },
  "Seven of Wands": {
    ruName: "Семерка Жезлов",
    meaning_up: "Защита, стойкость",
    meaning_rev: "Сдача, слабость",
  },
  "Eight of Wands": {
    ruName: "Восьмерка Жезлов",
    meaning_up: "Скорость, движение",
    meaning_rev: "Задержки, хаос",
  },
  "Nine of Wands": {
    ruName: "Девятка Жезлов",
    meaning_up: "Устойчивость, выносливость",
    meaning_rev: "Истощение, сомнения",
  },
  "Ten of Wands": {
    ruName: "Десятка Жезлов",
    meaning_up: "Бремя, ответственность",
    meaning_rev: "Освобождение, отказ",
  },
  "Page of Wands": {
    ruName: "Паж Жезлов",
    meaning_up: "Энтузиазм, исследование",
    meaning_rev: "Неуверенность, лень",
  },
  "Knight of Wands": {
    ruName: "Рыцарь Жезлов",
    meaning_up: "Действие, страсть",
    meaning_rev: "Импульсивность, остановка",
  },
  "Queen of Wands": {
    ruName: "Королева Жезлов",
    meaning_up: "Уверенность, тепло",
    meaning_rev: "Ревность, эгоизм",
  },
  "King of Wands": {
    ruName: "Король Жезлов",
    meaning_up: "Лидерство, видение",
    meaning_rev: "Доминация, импульсивность",
  },
  "Ace of Cups": {
    ruName: "Туз Кубков",
    meaning_up: "Любовь, новые чувства",
    meaning_rev: "Пустота, блок эмоций",
  },
  "Two of Cups": {
    ruName: "Двойка Кубков",
    meaning_up: "Союз, партнерство",
    meaning_rev: "Разрыв, дисгармония",
  },
  "Three of Cups": {
    ruName: "Тройка Кубков",
    meaning_up: "Дружба, праздник",
    meaning_rev: "Изоляция, излишества",
  },
  "Four of Cups": {
    ruName: "Четверка Кубков",
    meaning_up: "Апатия, размышления",
    meaning_rev: "Новые возможности, интерес",
  },
  "Five of Cups": {
    ruName: "Пятерка Кубков",
    meaning_up: "Потеря, сожаление",
    meaning_rev: "Прощение, движение вперед",
  },
  "Six of Cups": {
    ruName: "Шестерка Кубков",
    meaning_up: "Ностальгия, доброта",
    meaning_rev: "Застревание в прошлом",
  },
  "Seven of Cups": {
    ruName: "Семерка Кубков",
    meaning_up: "Выбор, фантазии",
    meaning_rev: "Реальность, ясность",
  },
  "Eight of Cups": {
    ruName: "Восьмерка Кубков",
    meaning_up: "Уход, поиск",
    meaning_rev: "Страх перемен, возвращение",
  },
  "Nine of Cups": {
    ruName: "Девятка Кубков",
    meaning_up: "Удовлетворение, желание",
    meaning_rev: "Жадность, неудовлетворенность",
  },
  "Ten of Cups": {
    ruName: "Десятка Кубков",
    meaning_up: "Счастье, семья",
    meaning_rev: "Разлад, разрыв",
  },
  "Page of Cups": {
    ruName: "Паж Кубков",
    meaning_up: "Чувства, творчество",
    meaning_rev: "Незрелость, блок эмоций",
  },
  "Knight of Cups": {
    ruName: "Рыцарь Кубков",
    meaning_up: "Романтика, мечты",
    meaning_rev: "Иллюзии, непостоянство",
  },
  "Queen of Cups": {
    ruName: "Королева Кубков",
    meaning_up: "Эмпатия, забота",
    meaning_rev: "Зависимость, эмоциональность",
  },
  "King of Cups": {
    ruName: "Король Кубков",
    meaning_up: "Контроль эмоций, мудрость",
    meaning_rev: "Холодность, манипуляции",
  },
  "Ace of Swords": {
    ruName: "Туз Мечей",
    meaning_up: "Ясность, прорыв",
    meaning_rev: "Смятение, ложь",
  },
  "Two of Swords": {
    ruName: "Двойка Мечей",
    meaning_up: "Выбор, тупик",
    meaning_rev: "Решение, открытость",
  },
  "Three of Swords": {
    ruName: "Тройка Мечей",
    meaning_up: "Горе, разбитое сердце",
    meaning_rev: "Исцеление, прощение",
  },
  "Four of Swords": {
    ruName: "Четверка Мечей",
    meaning_up: "Отдых, восстановление",
    meaning_rev: "Выгорание, стресс",
  },
  "Five of Swords": {
    ruName: "Пятерка Мечей",
    meaning_up: "Конфликт, победа любой ценой",
    meaning_rev: "Примирение, отступление",
  },
  "Six of Swords": {
    ruName: "Шестерка Мечей",
    meaning_up: "Переход, облегчение",
    meaning_rev: "Застой, сопротивление",
  },
  "Seven of Swords": {
    ruName: "Семерка Мечей",
    meaning_up: "Хитрость, обман",
    meaning_rev: "Честность, разоблачение",
  },
  "Eight of Swords": {
    ruName: "Восьмерка Мечей",
    meaning_up: "Ограничения, ловушка",
    meaning_rev: "Свобода, смелость",
  },
  "Nine of Swords": {
    ruName: "Девятка Мечей",
    meaning_up: "Тревога, кошмары",
    meaning_rev: "Надежда, облегчение",
  },
  "Ten of Swords": {
    ruName: "Десятка Мечей",
    meaning_up: "Конец, предательство",
    meaning_rev: "Восстановление, новый старт",
  },
  "Page of Swords": {
    ruName: "Паж Мечей",
    meaning_up: "Любопытство, острый ум",
    meaning_rev: "Сплетни, поспешность",
  },
  "Knight of Swords": {
    ruName: "Рыцарь Мечей",
    meaning_up: "Решительность, действие",
    meaning_rev: "Безрассудство, конфликт",
  },
  "Queen of Swords": {
    ruName: "Королева Мечей",
    meaning_up: "Четкость, независимость",
    meaning_rev: "Жестокость, одиночество",
  },
  "King of Swords": {
    ruName: "Король Мечей",
    meaning_up: "Логика, власть",
    meaning_rev: "Манипуляция, тирания",
  },
  "Ace of Pentacles": {
    ruName: "Туз Пентаклей",
    meaning_up: "Возможности, процветание",
    meaning_rev: "Потери, жадность",
  },
  "Two of Pentacles": {
    ruName: "Двойка Пентаклей",
    meaning_up: "Баланс, адаптация",
    meaning_rev: "Дисбаланс, перегрузка",
  },
  "Three of Pentacles": {
    ruName: "Тройка Пентаклей",
    meaning_up: "Мастерство, сотрудничество",
    meaning_rev: "Лень, разногласия",
  },
  "Four of Pentacles": {
    ruName: "Четверка Пентаклей",
    meaning_up: "Стабильность, контроль",
    meaning_rev: "Жадность, страх потери",
  },
  "Five of Pentacles": {
    ruName: "Пятерка Пентаклей",
    meaning_up: "Нужда, утрата",
    meaning_rev: "Восстановление, надежда",
  },
  "Six of Pentacles": {
    ruName: "Шестерка Пентаклей",
    meaning_up: "Щедрость, равновесие",
    meaning_rev: "Эгоизм, долг",
  },
  "Seven of Pentacles": {
    ruName: "Семерка Пентаклей",
    meaning_up: "Терпение, рост",
    meaning_rev: "Нетерпение, убытки",
  },
  "Eight of Pentacles": {
    ruName: "Восьмерка Пентаклей",
    meaning_up: "Усердие, мастерство",
    meaning_rev: "Лень, скука",
  },
  "Nine of Pentacles": {
    ruName: "Девятка Пентаклей",
    meaning_up: "Изобилие, независимость",
    meaning_rev: "Зависимость, потери",
  },
  "Ten of Pentacles": {
    ruName: "Десятка Пентаклей",
    meaning_up: "Наследие, семья",
    meaning_rev: "Разлад, утрата",
  },
  "Page of Pentacles": {
    ruName: "Паж Пентаклей",
    meaning_up: "Учеба, амбиции",
    meaning_rev: "Лень, рассеянность",
  },
  "Knight of Pentacles": {
    ruName: "Рыцарь Пентаклей",
    meaning_up: "Надежность, труд",
    meaning_rev: "Застой, скука",
  },
  "Queen of Pentacles": {
    ruName: "Королева Пентаклей",
    meaning_up: "Забота, достаток",
    meaning_rev: "Зависимость, скупость",
  },
  "King of Pentacles": {
    ruName: "Король Пентаклей",
    meaning_up: "Успех, стабильность",
    meaning_rev: "Жадность, упрямство",
  },
};

module.exports = cardTranslations;
