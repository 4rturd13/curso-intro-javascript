const cheapProducts = (arr) => {
  return arr.filter((e) => e.price >= 5 && e.price <= 10).map((e) => e.name)
}

let prods = [
  { name: 'Rice', price: 5 },
  { name: 'Bread', price: 3 },
  { name: 'Tomato', price: 8 },
  { name: 'Milk', price: 15 },
]
console.log(cheapProducts(prods)) // ["Rice", "Tomato"]
