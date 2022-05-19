function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const calculate = (n, m, t1, t2) => {
  const array = [];
  for (let i = 0; i < m; i++) {
    let array2 = []
    for (let j=0; j < n; j++) {
      array2.push(randomIntFromInterval(t1, t2))
    }
    array.push(array2)
  }
  console.log(`Начальная матрица: ${array}`);

  const sorted = array.sort(function(a, b){return b.reduce(function(a, b){
    return a + b;
  }, 0) - a.reduce(function(a, b){
    return a + b;
  }, 0)});
  array.map(el => {
    console.log(`${el.toString()} ${el.reduce((el,acc) => acc + Number(el),0)}`)
  })

  let processes = Array(n).fill(0);
  let result = [];
  let sumArray = [];
  let sum = 0;
  let minIndex;

  for(let x=0; x < m; x++) {
    for (let element=0;element<n;element++) {
      for (let y=0; y<n; y++) {
        if(element !== y) {
          sum = sum + (processes[y]*processes[y])
        } else {
          sum = sum+((processes[y]+sorted[x][y])*(processes[y]+sorted[x][y]))
        }
      }
      sumArray.push(sum);
      sum = 0;
    }
    console.log(sumArray)
    minIndex = sumArray.indexOf(Math.min(...sumArray))
    result.push([Array(processes.length).fill(0)])
    result[x][minIndex] = sorted[x][minIndex]
    processes[minIndex] += sorted[x][minIndex]
    sumArray = []
    console.log(processes)
  }
  console.log('Результат: ', result)
  return processes;

}
