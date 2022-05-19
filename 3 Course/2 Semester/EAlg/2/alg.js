export const calculate = (matrix, N, M) => {
  matrix = matrix.sort(function(a, b){return b.reduce(function(a, b){
    return a + b;
  }, 0) - a.reduce(function(a, b){
    return a + b;
  }, 0)});
  matrix.map(el => {
    console.log(`${el.toString()} ${el.reduce((el,acc) => acc + Number(el),0)}`)
  })
  
  let answer = [Array(N).fill(0)];
  
  answer.push(Array(N).fill(0));
  answer[1][matrix[0].indexOf(Math.min.apply(Math, matrix[0]))] = Math.min.apply(Math, matrix[0])
  answer[0][matrix[0].indexOf(Math.min.apply(Math, matrix[0]))] += Math.min.apply(Math, matrix[0]);
  
  for(let i=1; i < matrix.length; ++i){
  
    const minZagr = Math.min.apply(Math, answer[0]);
    const minZgarIndex = answer[0].indexOf(minZagr);
    if (minZagr === 0 && answer[0].filter(a => a === 0).length > 1){
      answer.push(Array(N).fill(0))
      const minIndexes = Array.from(answer[0].entries()).filter(i => i[1] == 0).map(i => i[0])
      const newM = [];
      minIndexes.map(index => newM.push(matrix[i][Number(index)]))
      answer[i + 1][matrix[i].indexOf(Math.min.apply(Math, newM))] = (Math.min.apply(Math, newM))
      answer[0][matrix[i].indexOf(Math.min.apply(Math, newM))] += Math.min.apply(Math, newM);
    } else {
      answer.push(Array(N).fill(0))
      answer[i + 1][minZgarIndex] = matrix[i][minZgarIndex]
      answer[0][minZgarIndex] += matrix[i][minZgarIndex]
    }
  }
  
  return answer;
}