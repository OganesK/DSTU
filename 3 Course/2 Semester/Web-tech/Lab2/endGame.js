const endGame = () => {const leadersData = localStorage.getItem('leaders').split(';')
const formattedData = leadersData.map(player => {
  return {name: player.split(':')[0], score: player.split(':')[1]}
})

formattedData.map(data => {
  const table = document.getElementsByClassName('leadersTable')[0]
  console.log(table.innerHTML)
  if (data.name !== undefined && data.score !== undefined){
    table.innerHTML += '<tr><td>'+data.name+'</td><td>'+data.score+'</td></tr>';
  }
})
}