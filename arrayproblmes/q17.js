// . Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


const GCD =(str1,str2) => {
    if(str1+str2 !== str2+str1){
        return ""
    }
    let maxLength = Math.max(str1.length,str2.length)
    let result = []

    for(let i =0 ; i<maxLength ;i++){
        if(str1[i]=== str2[i] && !result.includes(str1[i])){
            result.push(str1[i])
        }
    }
    return result.join("")
}

