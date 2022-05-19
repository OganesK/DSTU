import readlineSync from 'readline-sync';
import { calculate } from './alg.js';

// const N = 3;
// const M = 5;

// let matrix = [[17, 14, 12], [9, 5, 11], [15, 7, 12], [13, 10, 8], [11, 16, 14]];
// let matrix = [[9, 10, 20, 11], [7, 1, 13, 5], [4, 12, 3, 10], [15, 6, 22, 17]];

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const testMenu = () => {
  let choice = 123;
  
  while(Number(choice) !== 0) {
    console.log('1.Ввести значения вручную \n2.Сгенерировать автоматически матрицу(3х5) \n0.Выход\n')
    choice = readlineSync.question('Меню: ')
    
    switch (Number(choice)) {
      case 1:
        let N = Number(readlineSync.question('Введите размерность массива N: '));
        let M = Number(readlineSync.question('Введите размерность M: '));
        let mat = [];
        for (let i=0;i<M;i++){
          const row = readlineSync.question(`Введите через запятую строку №${i + 1}: `);
          mat.push(row.split(',').map(Number));
        }
        console.log(calculate(mat, N, M))
        break;
      case 2:
        const m = readlineSync.question('Введите m: ')
        const n = readlineSync.question('Введите n: ')
        const t1 = Number(readlineSync.question('Введите t1: '))
        const t2 = Number(readlineSync.question('Введите t2: '))
        const array = [];
        for (let i = 0; i < m; i++) {
          let array2 = []
          for (let j=0; j < n; j++) {
            array2.push(randomIntFromInterval(t1, t2))
          }
          array.push(array2)
      }
      console.log(array)
      console.log(calculate(array, Number(n), Number(m)))
      break;
      case 3:
        let matrix = [[17,14,13], [11, 16, 14], [15, 7, 12], [13, 10, 8], [9, 5, 11]];
        console.log(calculate(matrix, 3, 5));
        break;
    }
  }
}

testMenu();

