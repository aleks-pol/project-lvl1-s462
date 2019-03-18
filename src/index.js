import readlineSync from 'readline-sync';

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const showGameDescription = (game) => {
  switch (game) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
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
