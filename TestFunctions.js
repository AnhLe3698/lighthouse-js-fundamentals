const ageCalculator = function(name,yearOfBirth,currentYear){
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

const howManyHundreds = function(num) {
  return (num - num % 100) / 100;
}

console.log(howManyHundreds(1000));

function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0){
    return length*width;
  } else {
    return undefined;
  }
  
}
function calculateTriangleArea(base, height) {
  if(base >= 0 && height >=0) {
    return base*height/2;
  } else {
    return undefined;
  }
  
}

function calculateCircleArea(radius) {
  
  if( radius >=0) {
    return Math.PI * radius ** 2;
  } else {
    return undefined;
  }

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


function range(start, end, step) {
  let numberSet = [];
  if (start == undefined || end == undefined || step == undefined) {
    return numberSet;
  } else if (start > end || step <= 0) {
    return numberSet;
  } else {
    let delta = end - start;
    let steps = (delta - delta % step) / step;
    for (let i = 0; i <= steps; i++) {
      numberSet.push(start + i * step);
    };
    return numberSet;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function lastIndexOf(array, num){
  if (array.length == 0) {
    return -1;
  } else {
    for (let i = array.length; i > 0; i--) {
      if (array[i-1] === num) {
        return i-1;
      }
    }
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


function loopyLighthouse([start, end], [mul1, mul2], [string1, string2]) {
  for (let x = start; x <= end; x++){
    if (x % mul1 === 0 && x % mul2 === 0){
      console.log(string1 + string2);
    } else if (x % mul1 === 0) {
      console.log(string1);
    } else if (x % mul2 === 0) {
      console.log(string2);
    } else{
      console.log(x);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function concat(array1, array2) {
  if (array1.length === 0 && array2.length !== 0) {
    return array2;
  } else if (array1.length !== 0 && array2.length === 0) {
    return array1;
  } else {
    for (let i = 0; i < array2.length; i++ ){
      array1.push(array2[i]);
    }
    return array1;
  }
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

function merge(array1, array2) {
  let arrayConcat = concat(array1, array2);
  for (let i = 0; i < arrayConcat.length; i++) {
    for (let j = i + 1; j < arrayConcat.length; j++) {
      if (arrayConcat[i] > arrayConcat[j]) {
        let carry = arrayConcat[i];
        arrayConcat[i] = arrayConcat[j];
        arrayConcat[j] = carry;
      }
    }
  }
  return arrayConcat;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

console.log(merge([ 1, 2, 7, 4 ] , [ 4, 5, 6 ]), "=?", [ 1, 2, 4, 4, 5, 6, 7]);


function smartGarbage(trash, bins){
  if (trash === 'waste') {
    bins.waste ++;
  } else if (trash === 'recycling') {
    bins.recycling ++;
  } else if (trash === 'compost') {
    bins.compost ++;
  }
  return bins;
}

let bins = {
            waste: 0,
            recycling: 0,
            compost: 0
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

function carPassing(cars, speed) {
  let currentReading = {time: Date.now(), speed: speed};
  cars.push(currentReading);
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38;
carPassing(cars, speed)
console.log(cars);
console.log(cars[3].speed);

function judgeVegetable(vegList, trait) {
  
    let bestest = 0;
    let indexOfBest = -1;
    
    for(let i = 0; i < vegList.length; i++) {
      if (vegList[i][trait] > bestest) {
        bestest = vegList[i][trait];
        indexOfBest = i;
      }
    }
    return vegList[indexOfBest].submitter;
  
  
  }


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 9
  }
]


console.log(judgeVegetable(vegetables, "redness"));
console.log(judgeVegetable(vegetables, "plumpness"));