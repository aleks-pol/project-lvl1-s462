import readlineSync from 'readline-sync';
import { askName } from './index';

const MAX_GAME_ROUNDS = 3;
const START_QUESTION = 1;
const END_QUESTION = 100;

const generateNumber = (min, max) => Math.ceil(Math.random() * (max - min + 1) + min);

const isEven = n => n % 2 === 0;

const askAnswer = () => readlineSync.question('Your answer: ');

const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');

const showQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const showError = (answer, rightAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const startGame = () => {
  const name = askName();
  for (let currentRound = 1; currentRound <= MAX_GAME_ROUNDS; currentRound += 1) {
    const question = generateNumber(START_QUESTION, END_QUESTION);
    showQuestion(question);
    const answer = askAnswer();
    const rightAnswer = getRightAnswer(question);
    const isTrueAnswer = rightAnswer === answer;
    if (isTrueAnswer) {
      console.log('Correct!');
      if (currentRound === MAX_GAME_ROUNDS) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      showError(answer, rightAnswer, name);
      break;
    }
  }
};

export default startGame;
