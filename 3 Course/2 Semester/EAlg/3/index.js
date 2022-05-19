import { calculate } from "../3/alg.js";
import readlineSync from 'readline-sync';

const n = Number(readlineSync.question('Введите n: '))
const m = Number(readlineSync.question('Введите m: '))
const t1 = Number(readlineSync.question('Введите t1: '))
const t2 = Number(readlineSync.question('Введите t2: '))

console.log(calculate(n, m, t1, t2))
