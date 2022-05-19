import { calculate } from "./algorythm.js"

import readlineSync from 'readline-sync'

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const testMenu = () => {
  let choice = 123;
  
  while(Number(choice) !== 0) {
    console.log('1.Ввести значения вручную \n2.Сгенерировать автоматически \n0.Выход\n')
    choice = readlineSync.question('Меню: ')
    
    switch (Number(choice)) {
      case 2:
        console.log(calculate([22, 5, 7, 14, 5, 5, 9, 7], 4))
        break;
      case 1:
        const m = readlineSync.question('Введите m: ')
        const n = readlineSync.question('Введите n: ')
        const t1 = readlineSync.question('Введите t1: ')
        const t2 = readlineSync.question('Введите t2: ')
        const array = [];
        for (let i = 0; i < m; i++) {
          array.push(randomIntFromInterval(Number(t1), Number(t2)))
      }
        console.log(array);
        console.log(calculate(array, Number(n)))
        break;

    }
  }
}

testMenu();
