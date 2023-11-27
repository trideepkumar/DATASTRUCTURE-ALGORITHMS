var mergeS = function(nums1, m, nums2, n) {
    let newArr = []
    let i=0
    while(i < m){
        newArr.push(nums1[i])
        i++
    }
    i=0
    while(i < n){
        newArr.push(nums2[i])
        i++
    }

      // Sort numerically
      newArr.sort((a, b) => a - b);

      // Update nums1 with the sorted merged array
      for (let i = 0; i < m + n; i++) {
          nums1[i] = newArr[i];
      }

      return nums1
};


let nums1 =   [1,2,3,0,0,0]
let  m = 3
let  nums2 = [2,5,6]
let  n = 3

let result = mergeS(nums1,m,nums2,n)

console.log(result)