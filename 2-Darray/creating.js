const rows = 3;
const cols = 4;
const myArray = [];

for(let i = 0; i < rows; i++) {
  myArray[i] = [];
  for(let j = 0; j < cols; j++) {
    myArray[i][j] = i * cols + j + 1;
  }
}

console.log(myArray);
