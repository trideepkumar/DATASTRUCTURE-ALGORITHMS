const arrayRotate = (nums)=>{
    const n = nums.length;

    let minIndex = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }
    }

    for (let i = 0; i < n; i++) {
        const originalValue = nums[(i + minIndex) % n];
        const nextValue = nums[(i + minIndex + 1) % n];
        if (originalValue > nextValue) {
            return false;
        }
    }

    return true;

}

let arr =[3,4,5,1,2]


const result = arrayRotate(arr)

console.log(result)