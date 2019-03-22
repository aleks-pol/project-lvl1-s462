import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const numbersRange = [1, 100];

const isEven = n => n % 2 === 0;

const generateData = () => {
  const question = generateNumber(numbersRange);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default startGame(gameDescription, generateData);
