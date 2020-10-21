const greet = (obj) => {
  return obj.name && obj.age
    ? `Hello ${obj.name} you're ${obj.age} years old`
    : `Hello ${obj.name}`
}

const pedro = { name: 'Pedro', age: 23 }
console.log(greet(pedro)) // "Hola Pedro, tienes 23 años"

const maria = { name: 'Maria', age: 35 }
console.log(greet(maria)) // "Hola Maria, tienes 35 años"

const juan = { name: 'Juan' }
console.log(greet(juan)) // "Hola Juan"
