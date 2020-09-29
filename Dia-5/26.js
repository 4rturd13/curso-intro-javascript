const str = prompt('Insert a phrase')

const newStr = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
console.log(newStr)
