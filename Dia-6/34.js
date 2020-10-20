/* Response #1 */
const average = (arr) => {
  const res = arr.reduce((acc, curr) => acc + curr) / arr.length
  return res
}

console.log(average([1, 2, 3, 4])) // 2.5
console.log(average([7, 8, 9])) // 8
console.log(average([300, 100])) // 200

/* Response #2 */
Array.prototype.average = function () {
  const length = this.length
  const reducer = this.reduce((acc, cur) => acc + cur)
  return reducer / length
}

console.log(average([1, 2, 3, 4])) // 2.5
console.log(average([7, 8, 9])) // 8
console.log(average([300, 100])) // 200
