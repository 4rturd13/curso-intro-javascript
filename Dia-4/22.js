const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
count = 0;
for (let i = 0; i < nums.length; i++) {
  nums[i] === 1 ? count++ : null;
}
console.log(count);
