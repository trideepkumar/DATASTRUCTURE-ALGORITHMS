var sortedSquares = function(nums) {
    let n = nums.length;

    nums.forEach((num, index) => {
        nums[index] = num * num;
    });

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] > nums[j]) {
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums;
};

const arr = [-4, -1, 0, 3, 10];
const result = sortedSquares(arr);
console.log(result);
