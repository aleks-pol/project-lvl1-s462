import startGame from '..';
import generateNumber from '../utils';

const startQuestion = 1;
const endQuestion = 100;

const isEven = n => n % 2 === 0;

const getRightAnswer = question => (isEven(question) ? 'yes' : 'no');

const generateQuestion = () => {
  const question = generateNumber(startQuestion, endQuestion);
  return { question, rightAnswer: getRightAnswer(question) };
};

const game = {
  description: 'Answer "yes" if number even otherwise answer "no".\n',
  generateQuestion,
};

export default startGame(game);
