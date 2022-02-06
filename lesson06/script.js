"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomNum = function (n) {
  const num = Math.floor(Math.random() * Math.floor(n));
  console.log(num);
  return num;
};

// Обязательное

// function runGame(answer) {
//   function game() {
//     const input = prompt("Угадай число от 1 до 100");
//     if (input === null) {
//       alert("Игра окончена!");
//       return;
//     }
//     if (isNumber(input)) {
//       const yourNumber = +input;
//       if (yourNumber > answer) {
//         alert("Загаданное число больше");
//         game();
//       } else if (yourNumber < answer) {
//         alert("Загаданное число меньше");
//         game();
//       } else {
//         alert("Поздравляю, Вы угадали!!!");
//       }
//     } else {
//       alert("Введите число");
//       game();
//     }
//   }
//   return game;
// }

// const rightAnswer = randomNum(100);
// console.log(rightAnswer);

// const start = runGame(rightAnswer);
// console.dir(start);
// start();

// Усложненное

const attempt = 10;
const rightAnswer = randomNum(100);

const runGame = function (attempt, answer) {
  return function game() {
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
        if (yourNumber > answer) {
          alert(`Загаданное число больше, осталось ${attempt} попыток.`);
          game();
        } else if (yourNumber < answer) {
          alert(`Загаданное число меньше, осталось ${attempt} попыток.`);
          game();
        } else {
          if (confirm("Поздравляю, вы угадали! Сыграем еще?")) {
            runGame(attempt, randomNum(100))();
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
};

const start = runGame(attempt);
console.dir(start);
start();

// function runGame() {
//   let rightAnswer = randomNum(100);
//   let attempt = 10
//   console.log(rightAnswer);
//   function game() {
//     if (attempt == 0) {
//       if (confirm("Начать заново?")) {
//         runGame()
//       } else (alert("Хорошего дня"))
//     }
//     attempt--
//     const input = prompt("Угадай число от 1 до 100");
//     if (input === null) {
//       alert("Игра окончена!");
//       return;
//     }
//     if (isNumber(input)) {
//       const yourNumber = +input;
//       if (yourNumber > rightAnswer) {
//         alert(`Загаданное число больше осталось ${attempt} попыток`);
//         game();
//       } else if (yourNumber < rightAnswer) {
//         alert(`Загаданное число меньше осталось ${attempt} попыток`);
//         game();
//       } else {
//         alert("Поздравляю, Вы угадали!!!");
//       }
//     } else {
//       alert("Введите число");
//       game();
//     }
//   }
//   game();
// }

// runGame();
