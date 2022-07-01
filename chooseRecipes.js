const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let ingredHolder = "";
  for (let i = 0; i < bakeryA.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (bakeryA[i] === recipes[j].ingredients[0]) {
        for (let k = 0; k < bakeryB.length; k++) {
          if (recipes[j].ingredients[1] === bakeryB[k]) {
            return recipes[j].name;
          }
        }
      } else if (bakeryA[i] === recipes[j].ingredients[1]) {
        for (let k = 0; k < bakeryB.length; k++) {
          if (recipes[j].ingredients[0] === bakeryB[k]) {
            return recipes[j].name;
          }
        }
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));