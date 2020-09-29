const phrase = prompt("Insert a phrase");

count = 0;
for (let i = 0; i < phrase.length; i++) {
  phrase[i] === "a" ? count++ : null;
}
console.log(count);
