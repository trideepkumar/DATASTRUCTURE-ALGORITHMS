// // // You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// // // Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// // // The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// // // Example 1:

// // // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// // // Output: [1,2,2,3,5,6]
// // // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// // // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// // // Example 2:

// // // Input: nums1 = [1], m = 1, nums2 = [], n = 0
// // // Output: [1]
// // // Explanation: The arrays we are merging are [1] and [].
// // // The result of the merge is [1].
// // // Example 3:

// // // Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// // // Output: [1]
// // // Explanation: The arrays we are merging are [] and [1].
// // // The result of the merge is [1].
// // // Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


const num1 =  [1,2,3,0,0,0]
const num2 =   [2,4,5,6]
let m = 3
let n = 3

// // const  merge = (num1,num2,m,n)=>{
// //    for(let i =0 ; i<num2.length;i++){
// //     num1.push(num2[i])
// //    }

// //    let result =[]

// //    for(let j=0 ;j<num1.length;j++){
// //     for(let k = j+1 ; k<num1.length ; k++){
// //        if(num1[j]>0 && num1[j]<num1[k]){
// //           result.push(num1[k])
// //        }
// //     }
// //    }


// //    return result
// // }


// // console.log(merge(num1,num2,m,n))
// const num1 =  [1,2,3,0,0,0];
// const num2 =   [2,5,6];
// let m = 3; // Update with the correct value
// let n = 3; // Update with the correct value

// const merge = (num1, m, num2, n) => {
//   let p1 = m - 1; // Pointer for the end of num1
//   let p2 = n - 1; // Pointer for the end of num2
//   let p = m + n - 1; // Pointer for the merged array

//   while (p1 >= 0 && p2 >= 0) {
//     if (num1[p1] > num2[p2]) {
//       num1[p--] = num1[p1--];
//     } else {
//       num1[p--] = num2[p2--];
//     }
//   }

//   // If there are remaining elements in num2, copy them to num1
//   while (p2 >= 0) {
//     num1[p--] = num2[p2--];
//   }

//   // num1 is now merged and sorted
//   return num1;
// };

// console.log(merge(num1, m, num2, n));


var merge = function(nums1, m, nums2, n) {
    let newArrOrg = nums1.concat(nums2)
    let newArr = newArrOrg.filter((num)=> num!==0)
     for(let i =0 ; i<newArr.length;i++){
         for(let j=i+1 ;j<newArr.length;j++){
             if(newArr[i]>newArr[j] && newArr[i]!== 0){
                 let temp = newArr[i]
                 newArr[i] = newArr[j]
                 newArr[j] = temp
             }
         }
     }
     return newArr
};


console.log(merge(num1,3,num2,3))