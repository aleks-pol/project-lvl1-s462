import readlineSync from 'readline-sync';

const maxGameRounds = 3;

const askName = () => {
  const name = readlineSync.question('May I have your name? ') || 'Anonymous';
  console.log(`Hello, ${name}!\n`);
  return name;
};

const showQuestion = question => console.log(`Question: ${question}`);

const showError = (answer, rightAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const askAnswer = () => readlineSync.question('Your answer: ');


export default (description, generateQuestion) => () => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = askName();
  for (let currentRound = 1; currentRound <= maxGameRounds; currentRound += 1) {
    const { question, rightAnswer } = generateQuestion();
    showQuestion(question);
    const answer = askAnswer();
    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      showError(answer, rightAnswer, name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
