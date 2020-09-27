const randomNum = Math.floor(Math.random() * 10);
let userNum = Number(prompt("Insert a number"));

while (randomNum !== userNum) {
  userNum = Number(prompt("Sorry, try again!"));
}
console.log("Good job! You guessed the number");
