const sumLargestNumbers = function(data) {
  // Put your solution here
  let biggestNum = 0;
  let secondNum = 0;
  for(let i = 0; i < data.length; i++) {
    if (data[i] > biggestNum) {
      secondNum = biggestNum;
      biggestNum = data[i];
    } else if (data[i] > secondNum) {
      secondNum = data[i];
    }
  }
  return biggestNum + secondNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

const conditionalSum = function(values, condition) {
  // Your code here
  if (values.length !== 0) {
    let accumulator = 0;
    if (condition === "even") {
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2  === 0) {
          accumulator += values[i];
        }
      }
      return accumulator;
    } else if (condition === "odd") {
      for (let i = 0; i < values.length; i++) {
        if ( values[i] % 2 === 1) {
          accumulator += values[i];
        }
      }
      return accumulator;
    } else {
      return 0;
    }
    
  } else {
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

const numberOfVowels = function(data) {
  // a, e, i, o, and u
  let accumulator = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      accumulator ++;
    }
  }
  return accumulator;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));



const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestNameIndex = -1;
  let longestName = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (longestName < instructors[i].name.length) {
      longestName = instructors[i].name.length;
      longestNameIndex = i;
    }
  }
  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));



const urlEncode = function(text) {
  // Put your solution here
  let filteredString = rmvWhitespace(text);
  let resulting_string = "";
  for (let i = 0; i < filteredString.length; i++) {
    if (filteredString[i] === " ") {
      resulting_string += "%20";
    } else {
      resulting_string += filteredString[i];
    }
  }
  return resulting_string;
};

const rmvWhitespace = function(text) {
  let firstLetter = -1;
  let index = 0;
  let resulting_string = "";
  while (firstLetter === -1 && index < text.length) {
    if (text[index] !== " "){
      firstLetter = index;
    }
    index ++;
  }
  let lastLetter = 0;
  index = text.length - 1;
  while (lastLetter === 0 && index > -1) {
    if (text[index] !== " ") {
      lastLetter = index;
    }
    index --;
  }
  for (let i = firstLetter; i < lastLetter + 1; i++) {
    resulting_string += text[i];
  }
  return resulting_string;
};

console.log(rmvWhitespace("    light    "));
console.log(urlEncode("Lighthouse   Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure")); 
console.log(rmvWhitespace("Lighthouse Labs"));


const whereCanIPark = function (spots, vehicle) {
  /*
  Regular cars can only park in R spots.
  Small cars can park in R or S spots.
  Motorcycles can park in R, S, or M spots.
  */
  let coord = [];
  for (let i = 0; i < spots.length; i++) {
    for (let j =0; j < spots[i].length; j++){
      if (vehicle === "regular") {
        if (spots[i][j] === "R") {
          coord.push(j);
          coord.push(i);
          return coord;
        }
      } else if (vehicle === "small") {
        if (spots[i][j] === "R" || spots[i][j] === "S") {
          coord.push(j);
          coord.push(i);
          return coord;
        }
      } else if (vehicle === "motorcycle") {
        if (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") {
          coord.push(j);
          coord.push(i);
          return coord;
        }
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

const checkAir = function (samples, threshold) {
  // Code here!
  let cleanCount = 0;
  let dirtCount = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'clean') {
      cleanCount ++;
    } else if (samples[i] === 'dirty') {
      dirtCount ++;
    }
  }
  if (dirtCount / (cleanCount + dirtCount) >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


const repeatNumbers = function(data) {
  // Put your solution here
  let accum = "";
  for (let i = 0; i < data.length; i++) {
    for (let reps = 0; reps < data[i][1]; reps++) {
      accum += data[i][0];
    }
    if (i + 1 !== data.length) {
      accum += ", ";
    } 
  }
  return accum;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

const camelCase = function(input) {
  // Your code here
  //"a".charCodeAt() returns 97
  //String.fromCharCode(65,66,67); return ABC
  let resulting_string = "";
  let spaceIndica = 0; //will hold value that indicates there was a space prior
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      spaceIndica = 1;
    } else if (spaceIndica === 1) {
      spaceIndica = 0;
      let charCode = input[i];
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32);
    } else {
      spaceIndica = 0;
      resulting_string += input[i];
    }
  }
  return resulting_string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

const multiplicationTable = function(maxValue) {
  // Your code here
  let rowString = "";
  if (maxValue > 1) {
    for (let i = 1; i <= maxValue; i++) {
      for(let j = 1; j <= maxValue; j++) {
        rowString += i * j;
        if (j !== maxValue) {
          rowString += " ";
        }
      }
      rowString += "\n";
    }
    return rowString;
  } else if (maxValue === 1) {
    return "1\n";
  } else if (maxValue < 1) {
    return "error";
  }
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));




