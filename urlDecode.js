const urlDecode = function(text) {
  // %20 = " "; str1=str2 is a key-value pair; & is a seperator between multiple pairs
  let resObj = {};
  let key = ""; //key
  let valPair = ""; //value
  let isPair = 0; //determines if we are at a key or value part
  for (let i = 0; i < text.length; i++) {
    //checks if there is a space
    if (text[i] === "%" && text[i+1] === "2" && text[i+2] === "0") {
      i += 2;
      if(isPair === 0) {
        key += " ";
      } else {
        valPair += " "
      } //checks if there is a new key-value pair
    } else if (text[i] === "&") {
      isPair = 0;
      resObj[key] = valPair; // adds value to object
      key = ""; //reset key
      valPair = ""; //reset value
    } else if (text[i] === "=") {
      isPair = 1; // now we are in value and not key
    }else if (isPair === 1) {
      valPair += text[i];
    } else if (isPair === 0) {
      key += text[i];
    }
  }
  resObj[key] = valPair;
  return resObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/