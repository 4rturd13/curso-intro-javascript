const posPairs = (arr) => arr.filter((e, i) => i % 2 === 0)

console.log(posPairs(['a', 'b', 'c'])) // ["a", "c"]
console.log(posPairs([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPairs([])) // []
