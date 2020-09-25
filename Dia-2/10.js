const weight = Number(prompt("Insert your weight"));
const height = Number(prompt("Insert your height"));
const bmi = weight / height ** 2;

if (bmi < 18.5) {
  console.log("Under weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Normal");
} else {
  console.log("Obese");
}
