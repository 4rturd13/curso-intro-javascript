function Product(name, price) {
  this.name = name
  this.price = price
}

const bread = new Product('Bread', 2.5)
console.log(bread.name) // "Bread"
console.log(bread.price) // 2.5

const milk = new Product('Milk', 3.7)
console.log(milk.name) // "Milk"
console.log(milk.weight) // 3.7
