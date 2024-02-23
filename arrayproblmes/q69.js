// var findMissingAndRepeatedValues = function(grid) {
//     let obj = {}
//     let result = []
//     let allNums = []
//       for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             let currentNum = grid[i][j];
//             if (obj[currentNum]) {
//                 result.push(currentNum);
//             } else {
//                 obj[currentNum] = true;
//                 allNums.push(currentNum);
//             }
//         }
//     }
  
//     console.log(allNums)
//     //  let n = allNums.length;
//     // let totalSum = (n * (n + 1)) / 2;
//     // let arraySum = allNums.reduce((acc, num) => acc + num, 0)
//     // let missingNum = totalSum - arraySum;
//     // result.push(missingNum)
//     let maxNum = Math.max(...allNums);
//     console.log(maxNum+1)
//     let totalSum = (maxNum * (maxNum + 1)) / 2;
//     console.log(totalSum)
//     let arraySum = allNums.reduce((acc, num) => acc + num, 0);
//     console.log(arraySum)
//     let missingNum = totalSum - arraySum;
//     console.log(missingNum)
//     result.push(missingNum);


//     return result

// };

// let grid = [[1,3],[2,2]]

// console.log(findMissingAndRepeatedValues(grid))



var findMissingAndRepeatedValues = function(grid) {
    let obj = {};
    let result = [];
    let allNums = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let currentNum = grid[i][j];
            if (obj[currentNum]) {
                result.push(currentNum);
            } else {
                obj[currentNum] = true;
                allNums.push(currentNum);
            }
        }
    }

    let maxNum = Math.max(...allNums);
    let totalSum = (maxNum * (maxNum + 1)) / 2;
    let arraySum = allNums.reduce((acc, num) => acc + num, 0);
    let missingNum = totalSum - arraySum;
    result.push(missingNum);

    return result;
};

let grid = [[1, 3], [2, 2]];

console.log(findMissingAndRepeatedValues(grid));
