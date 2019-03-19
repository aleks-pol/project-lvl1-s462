import { generateNumber, showQuestion, startGame } from '..';

const gameName = 'gcd';
const startQuestion = 1;
const endQuestion = 100;

const findGcd = (a, b) => (b ? findGcd(b, a % b) : Math.abs(a)).toString();

const getRightAnswer = (numberOne, numberTwo) => findGcd(numberOne, numberTwo);

const generateQuestion = () => {
  const numberOne = generateNumber(startQuestion, endQuestion);
  const numberTwo = generateNumber(startQuestion, endQuestion);
  showQuestion(`${numberOne} ${numberTwo}`);
  return getRightAnswer(numberOne, numberTwo);
};

export default startGame(gameName, generateQuestion);
