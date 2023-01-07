import basicGame from '../src/index.js';

export default () => {
  const textOfGame = 'Find the greatest common divisor of given numbers.';

  const f = () => {
    let number1 = Math.round(Math.random() * 50);
    let number2 = Math.round(Math.random() * 50);
    let correctAnswer;
    const question = `${number1} ${number2}`;
    console.log(question);

    // ЕСЛИ ПРИХОДИТ 0 ИЛИ 1
    if (number1 === 0 || number2 === 0) {
      correctAnswer = '0';
      return correctAnswer;
    }
    if (number1 === 1 || number2 === 1) {
      correctAnswer = '1';
      return correctAnswer;
    }

    // получение массива простых множителей первого числа
    const stack1 = [];
    let step1 = 2;
    while (step1 <= number1) {
      if (number1 % step1 === 0) {
        stack1.push(step1);
        number1 /= step1;
      } else { step1 += 1; }
    }

    // получение массива простых множителей второго числа
    const stack2 = [];
    let step2 = 2;
    while (step2 <= number2) {
      if (number2 % step2 === 0) {
        stack2.push(step2);
        number2 /= step2;
      } else { step2 += 1; }
    }

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
      correctAnswer = 1; // если нет общих простых множелей, то наибольший общий делитель = 1
    } else {
      correctAnswer = result.reduce((acc, rec) => acc * rec);
      // произведение элементов массива = НАБОЛЬШИЙ ОБЩИЙ ДЕЛИТЕЛЬ
    }

    return `${correctAnswer}`;
  };

  basicGame(textOfGame, f);
};
