export const calculate = (matrix, n) => {
  let processArray = Array(n).fill(0);
  matrix = matrix.sort(function(a, b) {
    return b -a;
  });
  console.log(matrix.toString())
  matrix.map(el => {
    let k = 0;
    let index = 0;
    let minimum = processArray[0];
    processArray.map(anEl => {
      if (anEl < minimum){
        minimum = anEl;
        index = k
      }
      k += 1;
    })
    processArray[index] = processArray[index] + el;
    console.log(processArray);
  })
  return processArray;
}