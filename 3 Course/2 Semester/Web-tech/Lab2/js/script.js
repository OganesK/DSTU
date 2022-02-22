let levels = [];
levels[0] = {
  map:[
     [1,1,0,0,1],
     [1,0,0,0,0],
     [0,0,1,1,0],
     [0,0,0,1,0],
     [0,1,0,1,0]
  ],
  player: {
    x: 0,
    y: 4,
  },
  goal: {
    x: 4,
    y: 1
  },
  theme: 'default'
}

const Game = (id, level) => {
  const element = document.getElementById(id);
  const tileTypes = ['floor', 'wall'];
  const tileDim = 32;

  const map =

}