const pedro = {
  name: 'Pedro Perez',
  age: 30,
  active: true,
  hobbies: ['programar', 'squash', 'piano'],
}

console.log(pedro.age)

pedro.height = 1.8
delete pedro.active

for (const key in pedro) {
  if (pedro.hasOwnProperty(key)) {
    const element = pedro[key]
    console.log(`${key}: ${element}`)
  }
}
