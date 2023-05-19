function partitionArray(array) {
  const partitionedArray = [];
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    if (left === right) {
      partitionedArray.push([array[left]]);
    } else {
      partitionedArray.push([array[left], array[right]]);
    }

    left++;
    right--;
  }

  return partitionedArray;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const partitions = partitionArray(array);
console.log(partitions);