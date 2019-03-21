import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const numbersRange = [1, 5000];

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getRightAnswer = number => (isPrime(number) ? 'yes' : 'no');

const generateData = () => {
  const question = generateNumber(numbersRange);
  const rightAnswer = getRightAnswer(question);
  return { question, rightAnswer };
};

export default startGame(gameDescription, generateData);
