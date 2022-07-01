const makeCase = function(input, case1) {
  if (typeof case1 === "string") {
    return cases(input,case1);
  } else if (typeof case1 === "object") {
      for (let i = 0; i < case1.length; i++) {
      input = cases(input, case1[i]);
      }
      return input;
  }
}

function cases(input, case1) {
  if (case1 === "camel") {
    return camelCase(input);
  } else if (case1 === "pascal") {
    return pascal(input);
  } else if (case1 === "snake") {
    return snake(input);
  } else if (case1 === "kebab") {
    return kebab(input);
  } else if (case1 === "title") {
    return title(input);
  } else if (case1 === "vowel") {
    return vowel(input);
  } else if (case1 === "consonant") {
    return consonant(input);
  }else if (case1 === "upper") {
    return upper(input);
  }
}

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

const pascal = function(input) {
  // Your code here
  //"a".charCodeAt() returns 97
  //String.fromCharCode(65,66,67); return ABC
  let resulting_string = "";
  let spaceIndica = 0; //will hold value that indicates there was a space prior
  for (let i = 0; i < input.length; i++) {
    let charCode = input[i];
    if (input[i] === " ") {
      spaceIndica = 1;
    } else if (i === 0 ) {
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32)
    } else if (spaceIndica === 1) {
      spaceIndica = 0;
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32);
    } else {
      spaceIndica = 0;
      resulting_string += charCode;
    }
  }
  return resulting_string;
};

const snake = function(input) {
  let resulting_string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      resulting_string += "_"
    } else {
      resulting_string += input[i];
    }
  }
  return resulting_string;
};


const kebab = function(input) {
  let resulting_string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      resulting_string += "-"
    } else {
      resulting_string += input[i];
    }
  }
  return resulting_string;
};

const title = function(input) {
  // Your code here
  //"a".charCodeAt() returns 97
  //String.fromCharCode(65,66,67); return ABC
  let resulting_string = "";
  let spaceIndica = 0; //will hold value that indicates there was a space prior
  for (let i = 0; i < input.length; i++) {
    let charCode = input[i];
    if (input[i] === " ") {
      spaceIndica = 1;
      resulting_string += " ";
    } else if (i === 0 ) {
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32)
    } else if (spaceIndica === 1) {
      spaceIndica = 0;
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32);
    } else {
      spaceIndica = 0;
      resulting_string += charCode;
    }
  }
  return resulting_string;
};

const vowel = function (input) {
  let resulting_string = "";
  for (let i = 0; i < input.length; i++) {
    let charCode = input[i];
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32)
    } else {
      resulting_string += input[i];
    }
  }
  return resulting_string;
}

const consonant = function (input) {
  let resulting_string = "";
  for (let i = 0; i < input.length; i++) {
    let charCode = input[i];
    if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u" && input[i] !== " " && input[i] !== "." && input[i] !== ",") {
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32)
    } else {
      resulting_string += input[i];
    }
  }
  return resulting_string;
}

const upper = function (input) {
  let resulting_string = "";
  for (let i = 0; i < input.length; i++) {
    let charCode = input[i];
    if (input[i] !== " " && input[i] !== "." && input[i] !== ",") {
      resulting_string += String.fromCharCode(charCode.charCodeAt() - 32)
    } else {
      resulting_string += input[i];
    }
  }
  return resulting_string;
}

console.log(makeCase("this is a string", "camel")); //thisIsAString
console.log(makeCase("this is a string", "pascal")); //ThisIsAString
console.log(makeCase("this is a string", "snake")); //this_is_a_string
console.log(makeCase("this is a string", "kebab"));//this-is-a-string
console.log(makeCase("this is a string", "title"));//This Is A String
console.log(makeCase("this is a string", "vowel"));//thIs Is A strIng
console.log(makeCase("this is a string", "consonant"));//THiS iS a STRiNG
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "kebab"]));//THIS_IS_A_STRING
