String.prototype.palindrome = function () {
  const str = this.toLowerCase().replace(/[\W_]/g, '')
  const reverse = str.split('').reverse().join('')
  return str === reverse
}

console.log('anita lava la tina'.palindrome()) // true
console.log('aman a panama'.palindrome()) // true
console.log('hola mundo'.palindrome()) // false
