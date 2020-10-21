const pairs = (arr) => arr.filter((num) => num % 2 === 0)

console.log(pairs([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pairs([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pairs([7, 921, 43, 9649])) // []
