var maximumOddBinaryNumber = function(s) {
   let newArr= s.split('')
   let sortedArr = newArr.sort()
   for(let i=sortedArr.length-1 ; i>=0 ;i--){
    if(sortedArr[i]%2 !==0){
        return sortedArr.join('')
    }
    else{
        sortedArr.pop()
    }
   }

};

let  s = "010"

const result = maximumOddBinaryNumber(s)

console.log(result)