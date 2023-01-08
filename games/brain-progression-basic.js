import basicGame from '../src/index.js';

export default () => {
  const textOfGame = 'What number is missing in the progression?';

  const f = () => {
    // создание массива с 0-ым элементом = рандомное число.
    const stack = [Math.floor(Math.random() * 100)];
    // определение длины массива не менее 5 и не более 10
    const lengthOfStack = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    let i = 0;
    // определение величины прогрессии от 1 до 15 вкл
    const prog = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    // наполнение массива данными
    while (i < lengthOfStack) {
      stack.push(stack[i] + prog);
      i += 1;
    }
    // определяем рандомный индекс массива от 0 до длина-1 вкл
    const index = Math.floor(Math.random() * (lengthOfStack - 1));
    const correctAnswer = stack[index];

    stack[index] = '..'; // замена элемента
    const question = stack.join(' '); // преобразование массива в строку
    console.log(`Question: ${question}`);
    return `${correctAnswer}`;
  };

  basicGame(textOfGame, f);
};
