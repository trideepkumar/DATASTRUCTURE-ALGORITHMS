// var findKthPositive = function(arr, k) {
//     let count = 0;
//     let i = 0;
//     let num = 1;
  
//     while (count < k && i < arr.length) {
//       if (arr[i] === num) {
//         i++;
//       } else {
//         count++;
//       }
//       num++;
//     }

//     if (count < k) {
//         num = arr[arr.length - 1] + k - count;
//       } else {
//         num--;
//       }
//       return num;
// };

//converting into hashtable 
var findKthPositive = function(arr, k) {
    let ht = {}
    for(let i = 0; i< arr.length; i++){
        ht[arr[i]] = true
    }
    let count = 0
    let value = 1
    let result
    while(count !== k){
        if(!ht[value]){
            count++
            result=value
        }
        value++
    }
    return result
};


let arr =[2,3,4,7,11]
let k =5
console.log(findKthPositive(arr,k))