import { playGame } from "../../index.js";

function gameLogic() {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = number;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return { question, correctAnswer };
}



export function startGame() {
    playGame('Answer "yes" if the number is even, otherwise answer "no".', gameLogic);
}

// import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

// function brainEven() {
//   const userName = readlineSync.question('May I have your name? ');
//   console.log('Hello, ' + userName + '!');
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   let correctAnswers = 0;

//   while (correctAnswers < 3) {
//     const number = Math.floor(Math.random() * 100) + 1;
//     console.log(`Question: ${number}`);
//     const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
//     const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

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
// brainEven();

