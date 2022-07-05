const generateBoard = function (whiteQueen, blackQueen) {
  let boardState = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  boardState[whiteQueen[0]][whiteQueen[1]] = 1;
  boardState[blackQueen[0]][blackQueen[1]] = 1;
  return boardState;
}

const queenThreat = function(boardState) {
  let whiteQueen = []
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (boardState[i][j] === 1) {
        whiteQueen.push(i);
        whiteQueen.push(j);
      }
    }
  }
  console.log(whiteQueen);
  // Looking for piece above
  for (let i = 0; i < whiteQueen[0]; i++) {
    if (boardState[i][whiteQueen[1]] === 1) {
      return true;
    }
  }
  // Looking for piece below
  for (let i = whiteQueen[0] + 1; i < 8; i++) {
    if (boardState[i][whiteQueen[1]] === 1) {
      return true;
    }
  }
  // Looking for piece right
  for (let i = whiteQueen[1] + 1; i < 8; i++) {
    if (boardState[whiteQueen[0]][i] === 1) {
      return true;
    }
  }
  //looking for piece left
  for (let i = 0; i < whiteQueen[1]; i++) {
    if (boardState[whiteQueen[0]][i] === 1) {
      return true;
    }
  }
  let inboard = true;
  let indexer = 0;
  //looking for piece in bottom left
  while (inboard) {
    indexer ++;
    if (whiteQueen[0] + indexer < 8 && whiteQueen[1] - indexer > - 1 ) {
      if (boardState[whiteQueen[0] + indexer][whiteQueen[1] - indexer] === 1) {
        return true;
      }
    } else {
      inboard = false;
    }
  }

  inboard = true;
  indexer = 0;
  //looking for piece in bottom right
  while (inboard) {
    indexer ++;
    if (whiteQueen[0] + indexer < 8 && whiteQueen[1] + indexer < 8 ) {
      if (boardState[whiteQueen[0] + indexer][whiteQueen[1] + indexer] === 1) {
        return true;
      }
    } else {
      inboard = false;
    }
  }
  return false;
}

let whiteQueen = [2, 7];
let blackQueen = [5, 4];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 5];
blackQueen = [5, 0];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));