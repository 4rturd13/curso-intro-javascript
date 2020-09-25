const randomNum = Math.floor(Math.random() * 10);
const insertNum = Number(prompt("Insert a number"));
insertNum === randomNum
  ? console.log("Congrats, that's correct number!")
  : console.log("Sorry, try again!");