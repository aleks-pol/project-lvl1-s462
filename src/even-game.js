import readlineSync from 'readline-sync';

export const generateNumber = () => Math.ceil(Math.random() * 100);

export const isEven = n => n % 2 === 0;

export const askAnswer = () => readlineSync.question('Your answer: ');

export const checkAnswer = (number, answer) => ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no'));

export const showQuestion = (number) => {
  console.log(`Question: ${number}`);
};

export const showError = (answer, number, name) => {
  const rightAnswer = isEven(number) ? "'yes'" : "'no'";
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
};
