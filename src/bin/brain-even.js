#!/usr/bin/env node
import { showGreeting, askName, showGameDescription } from '..';
import {
  generateNumber, askAnswer, checkAnswer, showError, showQuestion,
} from '../even-game';

const GAME_ROUNDS = 3;
let gameRound = 0;

showGreeting();
showGameDescription('even');

const name = askName();

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
