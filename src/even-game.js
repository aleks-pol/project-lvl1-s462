import readlineSync from 'readline-sync';

const GAME_ROUNDS = 3;
let gameRound = 0;

const generateNumber = () => Math.ceil(Math.random() * 100);

const isEven = n => n % 2 === 0;

const askAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (number, answer) => ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no'));

const showQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const showError = (answer, number, name) => {
  const rightAnswer = isEven(number) ? "'yes'" : "'no'";
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
};

const startGame = (name) => {
  while (gameRound < GAME_ROUNDS) {
    const number = generateNumber();
    showQuestion(number);
    const answer = askAnswer();
    const isTrueAnswer = checkAnswer(number, answer);
    if (isTrueAnswer) {
      gameRound += 1;
      console.log('Correct!');
      if (gameRound === GAME_ROUNDS) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      showError(answer, number, name);
      break;
    }
  }
};

export default startGame;
