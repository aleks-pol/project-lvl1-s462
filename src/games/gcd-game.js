import { generateNumber, showQuestion, startGame } from '../index';

const GAME_NAME = 'gcd';
const START_QUESTION = 1;
const END_QUESTION = 100;

const findGcd = (a, b) => (b ? findGcd(b, a % b) : Math.abs(a)).toString();

const getRightAnswer = (numberOne, numberTwo) => findGcd(numberOne, numberTwo);

const generateQuestion = () => {
  const numberOne = generateNumber(START_QUESTION, END_QUESTION);
  const numberTwo = generateNumber(START_QUESTION, END_QUESTION);
  showQuestion(`${numberOne} ${numberTwo}`);
  return getRightAnswer(numberOne, numberTwo);
};

export default startGame(GAME_NAME, generateQuestion);
