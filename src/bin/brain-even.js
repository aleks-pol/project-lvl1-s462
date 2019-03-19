#!/usr/bin/env node
import { showGreeting, showGameDescription } from '..';
import startGame from '../even-game';

showGreeting();

showGameDescription('even');

startGame();
