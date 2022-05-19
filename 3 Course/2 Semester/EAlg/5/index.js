import readlineSync from 'readline-sync';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const calc = (array, process) => {
  let res = [];
  for(let x=0;x<array.length;x++) {
    let dopProcess = [];
    for(let j=0;j<array[x].length;j++) {
      dopProcess.push(array[x][j] + process[j])
    }
    let minEl = dopProcess[0]
    let minIn = 0;
    for(let i=0;i<dopProcess.length;i++) {
      if (minEl > dopProcess[i]){
        minIn = i
        minEl = dopProcess[i]
      }
    }
    process[minIn] = minEl
    res.push( Array(4).fill(0))
    res[x][minIn] = array[x][minIn]
    console.log('Результат',process)
  }
  return res
}

// const calculate = (matrix, n, m) => {
//   let processArray = Array(n).fill(0);
//   matrix.map(el => {
//   let dopArray = []
//     let k = 0;
//     let index = 0;
//     let minimum = processArray[0];
//     processArray.map(anEl => {
//       if (anEl < minimum){
//         minimum = anEl;
//         index = k
//       }
//       k += 1;
//     })
//     console.log('Итерация', processArray, el)
//     processArray[index] = processArray[index] + el[el.findIndex(el => el !== 123321)];
//   })
//   return processArray
// }

const randomInfinnity = (array, n) => {
  array.map(row => {
    for(let i=0;i< randomIntFromInterval(0, n);i++) {
      row[randomIntFromInterval(0, n)] = 123321
    }
  })
}

const selSort = (array1, array2) => {
  const sorted = array.sort(function(a, b){return b.reduce(function(a, b){
    return a + b;
  }, 0) - a.reduce(function(a, b){
    return a + b;
  }, 0)});
  return sorted;
}

const sort = (variant, array) => {
  switch(variant) {
    case 1:
      return (array.sort(function(a, b) {
        return a[a.findIndex(elem => elem !== 123321)] - b[b.findIndex(elem => elem !== 123321)];
      }))
      break
    
      case 2:
        return (array.sort(function(a, b) {
          return a.reduce((acc, curr) => {
            if (curr === 123321) {
              acc++;
            }
            return acc;
          },  0) - b.reduce((acc, curr) => {
            if (curr === 123321) {
              acc++;
            }
            return acc;
          },  0);
        }))
        break
      case 3:
        let resultArray = [];
        let startIndex = 0;
        let stopIndex = 0;
        let lastElement = array
  }
}

const m = Number(readlineSync.question('Введите m: '));
const n = Number(readlineSync.question("Введите n: "))
const t1 = Number(readlineSync.question("Введите t1: "))
const t2 = Number(readlineSync.question("Введите t2: "))

let array = []

for (let i = 0; i < m; i++) {
  array.push(Array(n).fill(randomIntFromInterval(t1, t2)))
}

console.log('Исходная матрица: ')
array.map(row => console.log(row))

randomInfinnity(array, n)
console.log('Матрица после добавления бесконечностей: ')
array.map(row => console.log(row))
console.log('Результат алгоритма без сортировки')
calc(array, Array(n).fill(0))


sort(1, array)
console.log('Матрица после сортировки 1 вариантом: ')
array.map(row => console.log(row))
console.log('Результат алгоритма после сортировки 1 вариантом')
calc(array, Array(n).fill(0))

sort(2, array)
console.log('Матрица после сортировки 2 вариантом: ')
array.map(row => console.log(row))
console.log('Результат алгоритма после сортировки 2 вариантом')
calc(array, Array(n).fill(0))

// const testArray = [[123321, 123321, 123321, 20], [19, 19, 19, 123321], [17, 123321, 17, 17], [123321, 15, 123321, 15], [14, 14, 123321, 14], [123321, 123321, 13, 123321], [11, 11, 11, 11], [123321, 10, 10, 123321], [123321, 10, 10, 10]]
// const testarray2 = [[123321, 123321, 13, 123321], [123321, 123321, 123321, 20], [123321, 10, 10, 123321], [123321, 15, 123321, 15], [17, 123321, 17, 17], [123321, 10, 10, 10], [14, 14, 123321, 14], [19, 19, 19, 123321], [11, 11, 11, 11]]
// calc(testarray2, Array(4).fill(0))