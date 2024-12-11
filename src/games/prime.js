import { playGame } from '../index.js';

// Функция для проверки, является ли число простым
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function gameLogic() {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

export function startGame() {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', gameLogic);
}
