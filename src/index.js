import readlineSync from 'readline-sync';

const maxGameRounds = 3;

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const showGameDescription = (description) => {
  console.log(description);
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askAnswer = () => readlineSync.question('Your answer: ');

const showQuestion = question => console.log(`Question: ${question}`);

const showError = (answer, rightAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export default game => () => {
  const { description, generateQuestion } = game;
  showGreeting();
  showGameDescription(description);
  const name = askName();
  for (let currentRound = 1; currentRound <= maxGameRounds; currentRound += 1) {
    const { question, rightAnswer } = generateQuestion();
    showQuestion(question);
    const answer = askAnswer();
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      showError(answer, rightAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
