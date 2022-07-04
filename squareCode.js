const squareCode = function(message) {
  // Put your solution here
  let resultingMessage = "";
  for (let i = 0; i < message.length; i++) {
    if ( message[i] != " ") {
      resultingMessage += message[i];
    }
  }
  console.log(resultingMessage);
  rows = Math.ceil(Math.sqrt(resultingMessage.length));
  columns = Math.ceil(resultingMessage.length / rows);
  console.log(rows);
  console.log(columns);

  // This line of code will let us know when the uneven lines start
  let unevenColumns = rows - (columns - resultingMessage.length % columns);
  // This line of code gets rid of the uneven comlumn exceptions for perfect squares/rectangles
  if (resultingMessage.length % columns === 0) {
    unevenColumns = rows;
  } 
  let finalMessage = "";
  let columnsAdj = columns;
  console.log(unevenColumns);
  
  for (let r = 0; r < rows; r++ ) {
    // This conditional will adjust the column size depending on row
    if (r === unevenColumns) {
      columnsAdj = columns - 1;
    }
    for (let c = 0; c < columnsAdj; c++){
      finalMessage += resultingMessage[r + rows * c];
    } 
    finalMessage += " ";
  }
  return finalMessage;
  
  
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
console.log(squareCode("perfect square wow"));

/*
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/