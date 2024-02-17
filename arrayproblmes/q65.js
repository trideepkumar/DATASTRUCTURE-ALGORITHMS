    var findMinimumOperations = function(s1, s2, s3) {
        let l1= s1.length
        let l2 = s2.length
        let l3 = s3.length

        let len = Math.min(l1, l2, l3);
        let sum = l1+l2+l3

        if(s1[0] !==s2[0] || s2[0] !== s3[0] || s1[0] !== s3[0]){
            return -1
        }

        for(let i=0; i<len; i++){
            if(s1[i] === s2[i] && s2[i] === s3[i]){
                sum -= 3;
            }else{
                break
            }
        }

        return sum
    };


s1 = "abcd3", s2 = "abb", s3 = "ab"

console.log(findMinimumOperations(s1,s2,s3))