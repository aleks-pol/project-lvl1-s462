import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'What is the result of the expression?\n';
const numbersRange = [1, 100];
const mathOperations = ['+', '-', '*'];
const operationsRange = [0, mathOperations.length - 1];

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const getRightAnswer = (firstArg, secondArg, mathOperation) => {
  switch (mathOperation) {
    case '+':
      return add(firstArg, secondArg);
    case '-':
      return sub(firstArg, secondArg);
    case '*':
      return mul(firstArg, secondArg);
    default:
      return null;
  }
};

const generateQuestion = () => {
  const firstArg = generateNumber(numbersRange);
  const secondArg = generateNumber(numbersRange);
  const mathOperation = mathOperations[generateNumber(operationsRange)];
  return {
    question: `${firstArg} ${mathOperation} ${secondArg}`,
    rightAnswer: getRightAnswer(firstArg, secondArg, mathOperation),
  };
};

export default startGame(gameDescription, generateQuestion);
