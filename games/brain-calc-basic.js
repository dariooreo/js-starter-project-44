import basicGame from '../src/index.js';

export default () => {
  const textOfGame = 'What is the result of the expression?';

  const f = () => {
    const simbol = '+-*';
    const randomSimbol = simbol[Math.floor(Math.random() * 3)];
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 10);

    const question = `${number1}${randomSimbol}${number2}`;

    let correctAnswer;
    if (randomSimbol === '+') {
      correctAnswer = `${number1 + number2}`;
    } else if (randomSimbol === '-') {
      correctAnswer = `${number1 - number2}`;
    } else if (randomSimbol === '*') {
      correctAnswer = `${number1 * number2}`;
    }

    console.log(question);

    return correctAnswer;
  };

  basicGame(textOfGame, f);
};
