import { generateNumber, showQuestion, startGame } from '../index';

const GAME_NAME = 'even';
const START_QUESTION = 1;
const END_QUESTION = 100;

const isEven = n => n % 2 === 0;

const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');

const generateQuestion = () => {
  const question = generateNumber(START_QUESTION, END_QUESTION);
  showQuestion(question);
  return getRightAnswer(question);
};

export default startGame(GAME_NAME, generateQuestion);
