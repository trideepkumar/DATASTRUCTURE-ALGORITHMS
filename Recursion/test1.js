//Write a function to calculate the nth Fibonacci number using recursion.

function sumArray(arr, index = 0, sum = 0) {
    if (index === arr.length) {
      return sum;
    } else {
      return sumArray(arr, index + 1, sum + arr[index]);
    }
  }
  

  console.log(sumArray([1,2,3,4,5,6,7]));