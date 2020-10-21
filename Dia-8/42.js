function Person(name, weight, height) {
  this.name = name
  this.weight = weight
  this.height = height
}

Person.prototype.greet = function (name) {
  return `Hello ${name}, my name is ${this.name}`
}

Person.prototype.bmi = function () {
  return this.weight / this.height ** 2
}

const pedro = new Person('Pedro', 72, 1.5)
console.log(pedro.greet('Maria')) // "Hello Maria, mi name is Pedro"
console.log(pedro.bmi()) // 32
