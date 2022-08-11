let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (const main of board) {
  for (const item of main) {
    console.log(item);
  }
}

console.log(`-----------------------------------------`);

const doggo = {
  name: "Max",
  breed: "German Shephard",
  foods: ["chicken", "fish", "eggs"],
};

console.log(doggo.foods[1]);

console.log(`---------------------------------------`);

function favFood({ foods }) {
  for (const food of foods) {
    console.log(food);
  }
}

favFood(doggo);

console.log(`--------------------------------------`);

const recipes = {
  ingredients: {
    butter: "1 spoon",
    sugar: "2 spoon",
    floor: "1 cup",
  },

  valueIng() {
    for (const item in recipes.ingredients) {
      console.log(recipes.ingredients[item]);
    }
  },
};

recipes.ingredients.ginger = "1 piece";

// delete recipes.ingredients["sugar"] ;

recipes.ingredients.sugar = "brown sugar";

console.log(recipes);
recipes.valueIng();
