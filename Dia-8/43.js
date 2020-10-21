function Car() {
  this.speed = 0
}

Car.prototype.speedUp = function (num) {
  return (this.speed += num)
}

Car.prototype.brake = function (num) {
  const speedDown = this.speed - num
  speedDown > 0 ? (this.speed = speedDown) : (this.speed = 0)
}

const a1 = new Car()
console.log(a1.speed) // 0

a1.speedUp(1)
a1.speedUp(2)
console.log(a1.speed) // 3

a1.brake(2)
console.log(a1.speed) // 1
a1.brake(3)
// la velocidad quedaría en -1, así que se deja en 0
console.log(a1.speed) // 0
