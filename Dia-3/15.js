const num1 = Number(prompt("Insert a number"));
const num2 = Number(prompt("Insert a number"));

if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
} else if (num2 < num1) {
  for (let i = num1; i >= num2; i--) {
    console.log(i);
  }
} else {
  console.log(`Number 1 and number 2 are equal`);
}
