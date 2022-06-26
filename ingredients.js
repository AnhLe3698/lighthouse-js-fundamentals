const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(j = 0; i < ingredients.length; j++) {
  console.log(ingredients[i]);
}

console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(j = ingredients.length; j > 0; j--) {
  console.log(ingredients[j-1]);
}