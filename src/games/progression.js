import startGame from '..';
import generateNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const range = [0, 10];
const stepRange = [2, 10];
const length = 10;

const generateProgression = () => {
  const start = generateNumber(range);
  const step = generateNumber(stepRange);
  return Array.from(new Array(length),
    (val, index) => ((index + start) * step));
};

const generateData = () => {
  const progression = generateProgression();
  const hiddenNumIndex = generateNumber([0, length - 1]);
  const progressionWithHiddenEl = progression.map((item, index) => (index === hiddenNumIndex ? '..' : item));
  const question = progressionWithHiddenEl.join(' ');
  return { question, rightAnswer: progression[hiddenNumIndex].toString() };
};

export default startGame(gameDescription, generateData);
