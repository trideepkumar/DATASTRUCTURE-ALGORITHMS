// function getAllSubarrays(arr) {
//     let subarrays = [];
//     subarrays.push([])
  
//     for (let start = 0; start < arr.length; start++) {
//       for (let end = start + 1; end <= arr.length; end++) {
//         subarrays.push(arr.slice(start, end));
//       }
//     }
  
//     return subarrays;
//   }
  



  // const myArray = [1, 2, 3];
  // const subarrays = getAllSubarrays(myArray);
  // console.log(subarrays);]


  var subsets = function(nums) {
    
    let result = [];

    function generateSubsets(index, currentSubset) {
        result.push(currentSubset.slice());
        console.log(currentSubset.slice())

        for (let i = index; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            generateSubsets(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    generateSubsets(0, []);

    return result;
};

console.log(subsets([1,2,3]))
  