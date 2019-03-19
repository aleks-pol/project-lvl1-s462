import readlineSync from 'readline-sync';

export const MAX_GAME_ROUNDS = 3;

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const showGameDescription = (game) => {
  switch (game) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      break;
    case 'calc':
      console.log('What is the result of the expression?\n');
      break;
    default:
      break;
  }
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const askAnswer = () => readlineSync.question('Your answer: ');

export const generateNumber = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const showQuestion = question => console.log(`Question: ${question}`);

export const showError = (answer, rightAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const startGame = (gameName, askQuestion) => () => {
  showGreeting();
  showGameDescription(gameName);
  const name = askName();
  for (let currentRound = 1; currentRound <= MAX_GAME_ROUNDS; currentRound += 1) {
    const rightAnswer = askQuestion();
    const answer = askAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
      if (currentRound === MAX_GAME_ROUNDS) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      showError(answer, rightAnswer, name);
      break;
    }
  }
};
