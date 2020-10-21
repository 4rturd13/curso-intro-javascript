const decipher = (str, obj) => {
  const newStr = str.split('')
  for (let i = 0; i < newStr.length; i++) {
    const element = newStr[i]
    if (obj.hasOwnProperty(element)) {
      newStr[i] = obj[element]
    }
  }
  const joinStr = newStr.join('')
  return joinStr
}

console.log(decipher('h0l4', { 0: 'o', 4: 'a' })) // "hola"
console.log(decipher('pyrmizo', { y: 'e', z: 's' })) // "permiso"
console.log(decipher('igual', { h: 'n' })) // "igual"
