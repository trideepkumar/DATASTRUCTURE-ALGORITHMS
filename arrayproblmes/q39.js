function getAllSubarrays(arr) {
    let subarrays = [];
  
    for (let start = 0; start < arr.length; start++) {
      for (let end = start + 1; end <= arr.length; end++) {
        subarrays.push(arr.slice(start, end));
      }
    }
  
    return subarrays;
  }
  

  const myArray = [1, 2, 3];
  const subarrays = getAllSubarrays(myArray);
  console.log(subarrays);
  