import { playGame } from "../index.js";

// Создаём прогрессию
function generateProgression() {
    const length = Math.floor(Math.random() * 6) + 5; // до 10 чисел
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 10) + 1;

    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }

    //Скрытое число
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    return { progression: progression.join(' '), //возвращаем строку через пробел
        hiddenValue: String(hiddenValue) //строка, тк ответ игрока строка
    };
};

function gameLogic() {
    const { progression, hiddenValue } = generateProgression();
    const question = progression;
    const correctAnswer = hiddenValue;
    return { question, correctAnswer};
}

export function startGame() {
    playGame('What number is missing in the progression?', gameLogic);
}