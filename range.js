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
