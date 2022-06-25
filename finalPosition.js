const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves){
  let currentPosition = [0, 0];
  for (let i = 0; i < moves.length; i++){
    if (moves[i] === 'north') {
      currentPosition[1] += 1;
    } else if (moves[i] === 'south') {
      currentPosition[1] += -1;
    } else if (moves[i] === 'east') {
      currentPosition[0] += 1;
    } else if (moves[i] === 'west') {
      currentPosition[0] += -1;
    } 
  }
  console.log(currentPosition);
  return currentPosition;
}

console.log(moves.length);
finalPosition(moves);