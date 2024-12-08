import readlineSync from 'readline-sync';

export function welcomeMessage() {
    console.log('Welcome to the Brain Games!');
}

export function getUserName() {
    return readlineSync.question('May I have your name? ');
}

export function greetUser(userName) {
    console.log(`Hello, ${userName}!`);
}

export function checkAnswer(userAnswer, correctAnswer, userName) {
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false;
    } 
}

export function playGame(gameName, gameLogic) {
    welcomeMessage();
    const userName = getUserName();
    greetUser(userName);
    
    let correctAnswers = 0;
    while (correctAnswers < 3) {
        const {question, correctAnswer} = gameLogic();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ').trim();

        if (checkAnswer(userAnswer, correctAnswer, userName)) {
            correctAnswers += 1;
        } else {
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`);
}