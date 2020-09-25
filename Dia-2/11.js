const num = Number(prompt("Insert a number"));

num % 3 === 0 && num % 5 === 0
  ? console.log("bingbong")
  : num % 3 === 0
  ? console.log("bing")
  : num % 5 === 0
  ? console.log("bong")
  : console.log(num);
