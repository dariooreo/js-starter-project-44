import basicGame from '../src/index.js';

export default () => {
  const textOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const f = () => {
    const number = Math.floor(Math.random() * 100);

    const question = number;
    console.log(`Question: ${question}`);
    let correctAnswer;
    if (number === 0 || number === 1) {
      correctAnswer = 'no';
      return correctAnswer;
    }

    let i = 2;
    while (i <= Math.sqrt(number)) {
      if (number % i === 0) {
        correctAnswer = 'no';
        return correctAnswer;
      }
      i += 1;
    }

    correctAnswer = 'yes';
    return correctAnswer;
  };

  basicGame(textOfGame, f);
};
