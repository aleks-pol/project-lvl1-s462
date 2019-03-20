import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';
const numbersRange = [1, 100];

const findGcd = (a, b) => (b ? findGcd(b, a % b) : Math.abs(a));

const getRightAnswer = (numberOne, numberTwo) => findGcd(numberOne, numberTwo);

const generateQuestion = () => {
  const numberOne = generateNumber(numbersRange);
  const numberTwo = generateNumber(numbersRange);
  return {
    question: `${numberOne} ${numberTwo}`,
    rightAnswer: getRightAnswer(numberOne, numberTwo),
  };
};

export default startGame(gameDescription, generateQuestion);
