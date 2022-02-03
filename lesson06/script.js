"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomNum = function (n) {
  return Math.floor(Math.random() * Math.floor(n));
};

const start = function () {
  let myNum = randomNum(100);
  let attempt = 10;
  const game = function () {
    attempt--;
    if (attempt < 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        start();
      } else {
        alert("До свидания!");
        return;
      }
    } else {
      const num = prompt("Угадай число от 1 до 100");
      if (num === null) {
        alert("Игра окончена!");
        return;
      }
      if (isNumber(num)) {
        const yourNumber = +num;
        if (yourNumber > myNum) {
          alert(`Загаданное число меньше, осталось ${attempt} попыток.`);
          game();
        } else if (yourNumber < myNum) {
          alert(`Загаданное число больше, осталось ${attempt} попыток.`);
          game();
        } else {
          if (confirm("Вы угадали! Сыграем еще?")) {
            start();
          } else {
            alert("Игра завершена!");
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
start();
