import readlineSync from 'readline-sync';

export function showGreeting() {
    console.log('Welcome to the Brain Games!\n')
}

export function askName() {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}


