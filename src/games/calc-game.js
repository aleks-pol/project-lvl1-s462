import { generateNumber, showQuestion, startGame } from '..';

const gameName = 'calc';
const startQuestion = 1;
const endQuestion = 100;
const mathOperations = ['+', '-', '*'];

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const getRightAnswer = (firstArg, secondArg, mathOperation) => {
  switch (mathOperation) {
    case '+':
      return add(firstArg, secondArg).toString();
    case '-':
      return sub(firstArg, secondArg).toString();
    case '*':
      return mul(firstArg, secondArg).toString();
    default:
      return null;
  }
};

const generateQuestion = () => {
  const firstArg = generateNumber(startQuestion, endQuestion);
  const secondArg = generateNumber(startQuestion, endQuestion);
  const mathOperation = mathOperations[generateNumber(0, 2)];
  showQuestion(`${firstArg} ${mathOperation} ${secondArg}`);
  return getRightAnswer(firstArg, secondArg, mathOperation);
};

export default startGame(gameName, generateQuestion);
