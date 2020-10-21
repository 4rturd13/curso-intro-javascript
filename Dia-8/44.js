Array.prototype.average = function () {
  return this.reduce((acc, curr) => acc + curr) / this.length
}

console.log([1, 2, 3, 4].average()) // 2.5
console.log([7, 8, 9].average()) // 8
console.log([300, 100].average()) // 200
