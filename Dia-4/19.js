// const num = Number(prompt("Insert a number"));
const num = 5;
const arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}
arr.splice(1, 1);
arr.forEach((e) => console.log(" ", e));
