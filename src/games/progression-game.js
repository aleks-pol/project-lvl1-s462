import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'What number is missing in the progression?\n';
const range = [0, 10];
const stepRange = [2, 10];
const length = 10;

const getStep = () => generateNumber(stepRange);
const generateProgression = () => {
  const start = generateNumber(range);
  const step = getStep();
  return Array.from(new Array(length),
    (val, index) => ((index + start) * step));
};

const generateQuestion = () => {
  const init = generateProgression();
  const hiddenEl = generateNumber([0, length]);
  const withoutEl = init.map((item, index) => (index === hiddenEl ? '..' : item));
  const question = withoutEl.join(' ');
  return { question, rightAnswer: init[hiddenEl] };
};

export default startGame(gameDescription, generateQuestion);
