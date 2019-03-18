#!/usr/bin/env node
import { showGreeting, askName, showGameDescription } from '..';
import startGame from '../even-game';

showGreeting();
showGameDescription('even');

const name = askName();

startGame(name);
