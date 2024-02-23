var findIntersectionValues = function(nums1, nums2) {
    let answer = [0,0]
    let count=0
    let obj1 = {}
    let obj2 = {}

    for(let num of nums1){
        obj1[num] = true
    }

    for(let num of nums2){
        obj2[num] = true
    }

    for(let num in nums1){
        if(nums2[num]){
           answer[0]++
        }
    }

    for(let num in nums2){
        if(nums1[num]){
            answer[1]++
        }
    }

    return answer
};