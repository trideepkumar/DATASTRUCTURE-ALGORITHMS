var getRow = function(rowIndex) {

    let ar = [];

for (let i = 1; i <= rowIndex; i++) {
  ar.push(new Array(i).fill(0));
}

ar[0][0] = 1;
ar[1][1] = 1;
ar[1][0] = 1;

for (let i = 1; i < ar.length; i++) {
    ar[i][0] = 1;
    ar[i][i] = 1;
    for (let j = 1; j <= i - 1; j++) {
      ar[i][j] = ar[i - 1][j - 1] + ar[i - 1][j];
    }
  }
  
return ar;

};

console.log(getRow(0))