var numberGame = function(nums) {
    let arr = [];

    while (nums.length > 0) {
        let minIndex = findMinIndex(nums);
        let aliceMove = removeElement(nums, minIndex);

        minIndex = findMinIndex(nums);
        let bobMove = removeElement(nums, minIndex);

        arr.push(bobMove);
        arr.push(aliceMove);
    }

    return arr;
};

function findMinIndex(nums) {
    let minIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
    }

    return minIndex;
}

function removeElement(nums, index) {
    let removedElement = nums[index];

    for (let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }

    nums.length--;

    return removedElement;
}

// Example usage:
console.log(numberGame([5, 4, 2, 3])); // Output: [3, 2, 5, 4]
console.log(numberGame([2, 5])); // Output: [5, 2]
