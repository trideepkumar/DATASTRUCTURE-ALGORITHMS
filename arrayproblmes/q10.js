// given an array of n integers where array[i] is n the range [1,n] .find the 
//missing numbers in the array
//eg: input arr =[4,3,2,7,1]
//output = [5,6]


let arr = [4,3,2,7,1]

const  rangeArr = (arr)=>{
  let sortedArr = arr.sort((a, b) => a - b);

  let missingNumbers = [];

  for (let i = 0; i < sortedArr.length - 1; i++) {

    let diff = sortedArr[i + 1] - sortedArr[i];
    console.log(diff)

    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        missingNumbers.push(sortedArr[i] + j);
        console.log(missingNumbers)
      }
    }
  }

  return missingNumbers;
}


const result = rangeArr(arr)

console.log(result)
