const frequencies = (str) => {
  const newStr = str.replace(/ /g, '')
  const obj = {}
  for (const i of newStr) {
    if (obj[i]) {
      obj[i] += 1
    } else {
      obj[i] = 1
    }
  }
  return obj
}

console.log(frequencies('hola mundo'))
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frequencies('anita lava la tina'))
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
