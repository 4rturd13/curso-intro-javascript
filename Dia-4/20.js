const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"],
];

console.log("-- Resp #1 --");
for (let i = 0; i < mat.length; i++) {
  console.log(`Group ${i + 1}:`);
  for (let j = 0; j < mat[i].length; j++) {
    console.log(` ${mat[i][j]}`);
  }
}

console.log("-- Resp #2 --");
mat.map((elem, index) => {
  console.log("Group %d:", ++index);
  elem.map((el) => console.log(" ", el));
});
