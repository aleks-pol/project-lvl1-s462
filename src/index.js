import readlineSync from 'readline-sync';

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
