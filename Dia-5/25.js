const phrase = prompt("Insert a phrase");

const newPhrase = phrase
  .toLowerCase()
  .replace(/\s+/g, "")
  .replace(/a/g, "4")
  .replace(/e/g, "3")
  .replace(/i/g, "1")
  .replace(/o/g, "0");

console.log(newPhrase);
