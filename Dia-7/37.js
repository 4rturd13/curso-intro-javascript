const findProduct = (arr, num) => {
  for (obj of arr) {
    return num !== obj.id ? null : obj
  }
}

let products = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
]
console.log(findProduct(products, 1)) // { id: 1, name: "A" }

products = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
]
console.log(findProduct(products, 566)) // null
