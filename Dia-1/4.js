const yearOfBirth = Number(prompt("Insert your year of birth"));
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const result = currentYear - yearOfBirth;
console.log(`You are ${result} years old`);
