    //write an algorithm to determine if a number n is happy
    //A happy number is a number defined by the following process.
    //. starting with any positive integer , replace the number by the sum of the squares of its digits
    //.Repeat the process until the number equals 1 or it loops endlessly in a cycle which does not include 1
    //.Those numbers for which this process ends in 1 are happy.
    //Return true if n is a happy number ,and false if not.

// let num =19

// while(num>0){
//         let digit = 0
//         let arr = []
//         while(num>0){
//             let dig = num % 10
//             dig+=(dig*dig)
//             num = Math.floor(num)
//             arr.push(num)
//         }

//     if(digit.includes(arr)){
//         return false
//     }
//     else{
//         arr.push(num)
//     }
//     if(digit === 1){
//         return true
//     }
//     else{
//         num = digit
//     }

//     return false
// }



function happy(num){
    let digits = []
   while(num !== 0 ){
    let sum = 0
    while(num>0){
        let digit = num % 10
        sum += digit*digit 
        num = Math.floor(num/10)
    }
    num = sum
   }
   return num === 1
}

console.log(happy(19));