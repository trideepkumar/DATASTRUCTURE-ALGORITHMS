var findPrefixScore = function(nums) {

    let squareArr = nums.map((n)=>{
        return n*2
    })

    let result = []
    let sum = 0


    for(let i=0;i<squareArr.length;i++){
        sum+=squareArr[i]
        result.push(sum)
    }

    return result
};

let  nums = [2,3,7,5,10]

console.log(findPrefixScore(nums))