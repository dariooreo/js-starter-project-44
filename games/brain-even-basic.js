#!/usr/bin/env node
import basicGame from '../src/index.js';

export default () => {
  const textOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const f = () => {
    const question = Math.round(Math.random() * 100);
    let correctAnswer;
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else if (question % 2 !== 0) {
      correctAnswer = 'no';
    }
    console.log(`Question: ${question}`);
    return correctAnswer;
  };

  basicGame(textOfGame, f);
};
