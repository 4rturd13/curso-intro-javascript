/* Solution #1 */
const capitalize = (str) => {
  const newStr = str.split(' ')
  for (let i = 0; i < newStr.length; i++) {
    const chars = newStr[i].split('')

    chars[0] = chars[0].toUpperCase()

    newStr[i] = chars.join('')
  }
  return newStr.join(' ')
}

console.log(capitalize('pedro perez')) // "Pedro Perez"
console.log(capitalize('make it real')) // "Make it Real"

/* Solution #2 */
const capitalizeTwo = (str) => {
  const newStr = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
  return newStr
}

console.log(capitalize('pedro perez')) // "Pedro Perez"
console.log(capitalize('make it real')) // "Make it Real"
