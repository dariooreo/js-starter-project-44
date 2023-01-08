/* Это приветствие, запрос имени, итерация по раундам, сравнение и тд.
Можно вынести эту общую часть в отдельный файл index.js.
А в играх останется только уникальная для каждой игры часть - подготовка вопросов и ответов.
Эти уникальные игры и нужно положить в директорию games */

import readlineSync from 'readline-sync';

export default (textOfGame, f) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(textOfGame);

  const game = () => {
    for (let i = 1; i < 4; i += 1) {
      const correctAnswer = f();
      const answer = readlineSync.question('Your answer:');

      if (correctAnswer === answer) {
        console.log('Correct!');
      } else if (correctAnswer !== answer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        return;
      }
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }
    }
  };
  game();
};
