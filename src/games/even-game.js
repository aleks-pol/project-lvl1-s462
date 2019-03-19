import { generateNumber, showQuestion, startGame } from '..';

const gameName = 'even';
const startQuestion = 1;
const endQuestion = 100;

const isEven = n => n % 2 === 0;

const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');

const generateQuestion = () => {
  const question = generateNumber(startQuestion, endQuestion);
  showQuestion(question);
  return getRightAnswer(question);
};

export default startGame(gameName, generateQuestion);
