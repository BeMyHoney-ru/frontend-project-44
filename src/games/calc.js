import { playGame } from "../index.js";

function gameLogic() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(eval(question));
    return { question, correctAnswer };
}
export function startGame() {
    playGame('What is the result of the expression?', gameLogic);
}


// import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

// function brainCalc() {
//   const userName = readlineSync.question('May I have your name? ');
//   console.log('Hello, ' + userName + '!');
//   console.log('What is the result of the expression?');

//   let correctAnswers = 0;

//   while (correctAnswers < 3) {
//     const num1 = Math.floor(Math.random() * 100) + 1;
//     const num2 = Math.floor(Math.random() * 100) + 1;
//     const operators = ['+', '-', '*'];
//     const operator = operators[Math.floor(Math.random() * operators.length)];
//     const expression = `${num1} ${operator} ${num2}`;
//     const correctAnswer = String(eval(expression));

//     console.log(`Question: ${expression}`);
//     const userAnswer = readlineSync.question('Your answer: ').trim();

//     if (userAnswer === correctAnswer) {
//         console.log('Correct!');
//         correctAnswers += 1;
//     } else {
//         console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//         console.log(`Let's try again, ${userName}!`);
//         return;
//     }
//   }

//   console.log(`Congratulations, ${userName}!`);
// }

// brainCalc();