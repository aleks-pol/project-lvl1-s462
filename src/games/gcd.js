import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const numbersRange = [1, 100];

const findGcd = (a, b) => (b ? findGcd(b, a % b) : Math.abs(a));

const generateData = () => {
  const numberOne = generateNumber(numbersRange);
  const numberTwo = generateNumber(numbersRange);
  const question = `${numberOne} ${numberTwo}`;
  const rightAnswer = findGcd(numberOne, numberTwo).toString();
  return { question, rightAnswer };
};

export default startGame(gameDescription, generateData);
