const str1 = prompt('Insert a frase')
const str2 = prompt('Insert other frase')

let res = []

for (let i = 0; i < str1.length; i++) {
  str2.includes(str1[i]) ? res.push(str1[i]) : (res = '')
}

res === ''
  ? console.log('No common characters found')
  : console.log(`The following letters match ${res.join(', ')}`)
