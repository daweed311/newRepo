"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomNum = function (n) {
  return Math.floor(Math.random() * Math.floor(n));
};

const runGame = function () {
  let rightAnswer = randomNum(100);
  let attempt = 10;
  const game = function () {
    attempt--;
    if (attempt < 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        runGame();
      } else {
        alert("До свидания!");
        return;
      }
    } else {
      const input = prompt("Угадай число от 1 до 100");
      if (input === null) {
        alert("Игра окончена!");
        return;
      }
      if (isNumber(input)) {
        const yourNumber = +input;
        if (yourNumber > rightAnswer) {
          alert(`Загаданное число больше, осталось ${attempt} попыток.`);
          game();
        } else if (yourNumber < rightAnswer) {
          alert(`Загаданное число меньше, осталось ${attempt} попыток.`);
          game();
        } else {
          if (confirm("Поздравляю, вы угадали! Сыграем еще?")) {
            runGame();
          } else {
            alert("Игра окончена!");
            return;
          }
        }
      } else {
        alert("Введите число");
        game();
      }
    }
  };
  game();
};
runGame();
