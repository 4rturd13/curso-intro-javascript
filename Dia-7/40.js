const person = {
  weight: 65,
  height: 1.8,
  bmi: function () {
    return this.weight / this.height ** 2
  },
}

console.log(person.bmi()) // 20.061728395061728
