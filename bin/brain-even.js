#!/usr/bin/envnpm node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const game = () => {
  for (let i = 1; i < 4; i += 1) {
    const number = Math.round(Math.random() * 100);
    const rest = number % 2;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    if ((rest === 0 && answer === 'yes') || (rest === 1 && answer === 'no')) {
      console.log('Correct!');
    } else if (rest === 0 && answer !== 'yes') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      return;
    } else if (rest === 1 && answer !== 'no') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};
game();
