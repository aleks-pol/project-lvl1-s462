import { generateNumber, showQuestion, startGame } from '../index';

const GAME_NAME = 'calc';
const START_QUESTION = 1;
const END_QUESTION = 100;
const MATH_OPERATIONS = ['+', '-', '*'];

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
  const firstArg = generateNumber(START_QUESTION, END_QUESTION);
  const secondArg = generateNumber(START_QUESTION, END_QUESTION);
  const mathOperation = MATH_OPERATIONS[generateNumber(0, 2)];
  showQuestion(`${firstArg} ${mathOperation} ${secondArg}`);
  return getRightAnswer(firstArg, secondArg, mathOperation);
};

export default startGame(GAME_NAME, generateQuestion);
