import basicGame from '../src/index.js';

const getStackOfSimple = (num) => {
  let number = num;
  const stack = [];
  let step = 2;
  while (step <= number) {
    if (number % step === 0) {
      stack.push(step);
      number /= step;
    } else { step += 1; }
  }
  return stack;
};

const getCorrectAnswer = (num1, num2) => {
// получение массива простых множителей первого числа
  const number1 = num1;
  const number2 = num2;
  const stack1 = getStackOfSimple(number1);
  const stack2 = getStackOfSimple(number2);

  // создание массива общих простых множителей двух чисел
  const result = [];
  let i = 0;
  let g = 0;

  while (i < stack1.length && g < stack2.length) {
    if (stack1[i] === stack2[g]) {
      result.push(stack1[i]);
      i += 1;
      g += 1;
    } else if (stack1[i] < stack2[g]) {
      i += 1;
    } else if (stack1[i] > stack2[g]) {
      g += 1;
    }
  }

  if (result.length === 0) {
    return '1'; // если нет общих простых множелей, то наибольший общий делитель = 1
  }
  return `${result.reduce((acc, rec) => acc * rec)}`;
  // произведение элементов массива = НАБОЛЬШИЙ ОБЩИЙ ДЕЛИТЕЛЬ
};

export default () => {
  const textOfGame = 'Find the greatest common divisor of given numbers.';

  const f = () => {
    const number1 = Math.round(Math.random() * 50);
    const number2 = Math.round(Math.random() * 50);

    const question = `${number1} ${number2}`;
    console.log(`Question: ${question}`);

    // ЕСЛИ ПРИХОДИТ 0 ИЛИ 1
    if (number1 === 0 || number2 === 0) {
      return '0';
    }
    if (number1 === 1 || number2 === 1) {
      return '1';
    }

    return getCorrectAnswer(number1, number2);
  };

  basicGame(textOfGame, f);
};
