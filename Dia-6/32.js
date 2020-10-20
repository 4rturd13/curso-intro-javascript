function calColor(num) {
  let color
  if (num === 1) {
    color = 'black'
  } else if (num === 2) {
    color = 'white'
  } else if (num === 3) {
    color = 'blue'
  } else {
    color = 'green'
  }

  return 'The color is ' + color
}

console.log(calColor(1)) // "The color is black"
console.log(calColor(2)) // "The color is white"
console.log(calColor(3)) // "The color is blue"
console.log(calColor(8)) // "The color is green"
