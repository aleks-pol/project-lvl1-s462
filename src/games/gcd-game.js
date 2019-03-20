import startGame from '..';
import generateNumber from '../utils';

const startQuestion = 1;
const endQuestion = 100;

const findGcd = (a, b) => (b ? findGcd(b, a % b) : Math.abs(a));

const getRightAnswer = (numberOne, numberTwo) => findGcd(numberOne, numberTwo).toString();

const generateQuestion = () => {
  const numberOne = generateNumber(startQuestion, endQuestion);
  const numberTwo = generateNumber(startQuestion, endQuestion);
  return {
    question: `${numberOne} ${numberTwo}`,
    rightAnswer: getRightAnswer(numberOne, numberTwo),
  };
};

const game = {
  description: 'Find the greatest common divisor of given numbers.\n',
  generateQuestion,
};

export default startGame(game);
