import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';
const numbersRange = [1, 5000];
const maxPrimeNumber = 5000;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generatePrimeNumbers = (count) => {
  const arr = [2];
  for (let i = 3; i < count; i += 2) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
};

const primeNumbers = generatePrimeNumbers(maxPrimeNumber);

const getRightAnswer = question => (primeNumbers.indexOf(question) > -1 ? 'yes' : 'no');

const generateQuestion = () => {
  const question = generateNumber(numbersRange);
  const rightAnswer = getRightAnswer(question);
  return { question, rightAnswer };
};

export default startGame(gameDescription, generateQuestion);
