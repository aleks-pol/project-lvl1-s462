import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const numbersRange = [1, 100];
const mathOperations = ['+', '-', '*'];
const operationsRange = [0, mathOperations.length - 1];

const calcFunction = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateData = () => {
  const firstArg = generateNumber(numbersRange);
  const secondArg = generateNumber(numbersRange);
  const mathOperation = mathOperations[generateNumber(operationsRange)];
  const question = `${firstArg} ${mathOperation} ${secondArg}`;
  const rightAnswer = calcFunction[mathOperation](firstArg, secondArg).toString();
  return { question, rightAnswer };
};

export default startGame(gameDescription, generateData);
