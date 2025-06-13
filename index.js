const userInput = userInputString = prompt(
  "Hello, welcome to our online ice cream store would you like? please enter your order using a comma between each flavor",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const arr = userInput.split(",");

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.table(count);