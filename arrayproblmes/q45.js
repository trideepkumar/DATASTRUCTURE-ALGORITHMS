// largest odd number in a string

const largestOddNumber = (num) => {
  for (let i = num.length - 1; i >= 0; i--)
  if (num[i] % 2 !== 0) return num.slice(0, i + 1);
return "";
};



 
let str = "52"


const result = largestOddNumber(str)

console.log(result)