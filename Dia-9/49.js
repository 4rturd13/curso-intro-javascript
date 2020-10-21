const multiply = (arr, num) => arr.map((e) => e * num)

console.log(multiply([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiply([7, 4], 3)) // [21, 12]
console.log(multiply([], 10)) // []
