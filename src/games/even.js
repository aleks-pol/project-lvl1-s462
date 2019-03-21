import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';
const numbersRange = [1, 100];

const isEven = n => n % 2 === 0;

const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');

const generateGame = () => {
  const question = generateNumber(numbersRange);
  return { question, rightAnswer: getRightAnswer(question) };
};

export default startGame(gameDescription, generateGame);