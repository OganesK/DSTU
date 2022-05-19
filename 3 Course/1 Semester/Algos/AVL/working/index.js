const readlineSync = require("readline-sync");

const m = readlineSync.question('Введите m: ')
const n = readlineSync.question('Введите n: ')
const t1 = readlineSync.question('Введите t1: ')
const t2 = readlineSync.question('Введите t2: ')

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const array = Array.from({length: m}, () => randomIntFromInterval(t1,t2)).sort(function(a, b){return b - a});

const result = {};

for (let i = 0; i < m; i++) {
  result[i] = array[i]
}

console.log(result)