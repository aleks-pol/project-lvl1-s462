import startGame from '..';
import generateNumber from '../utils';

const startProgressionRange = 0;
const endProgressionRange = 10;
const startProgressionStep = 2;
const endProgressionStep = 10;
const progressionLength = 10;

const getProgressionStep = () => generateNumber(startProgressionStep, endProgressionStep);
const generateProgression = () => {
  const startProgression = generateNumber(startProgressionRange, endProgressionRange);
  const progressionStep = getProgressionStep();
  return Array.from(new Array(progressionLength),
    (val, index) => ((index + startProgression) * progressionStep).toString());
};

const generateQuestion = () => {
  const initProgression = generateProgression();
  const hiddenEl = generateNumber(0, 10);
  const progressionWithoutEl = initProgression.map((item, index) => (index === hiddenEl ? '..' : item));
  const question = progressionWithoutEl.join(' ');
  return { question, rightAnswer: initProgression[hiddenEl] };
};

const game = {
  description: 'What number is missing in the progression?\n',
  generateQuestion,
};

export default startGame(game);
