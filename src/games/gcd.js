// наибольший общий делитель - greatest common divisor
import { playGame } from "../index.js";

function gcd(a, b) {
    while (b) { // > 0 - true
        [a, b] = [b, a % b];
    }
    return a;
}

function gameLogic() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = String(gcd(num1, num2));
    return { question, correctAnswer };
}
  
export function startGame() {
    playGame('Find the greatest common divisor of given numbers.', gameLogic);
}