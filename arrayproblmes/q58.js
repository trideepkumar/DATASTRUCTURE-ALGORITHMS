var alternateDigitSum = function(n) {
    let m = 0
    let sum = 0
    console.log(n)
    let num = n.toString().split("")
    console.log(num)
    console.log(num.length)
    while(m < num.length){
        console.log("hello")
        if(m%2 ===0 ){
            console.log(num(m))
          sum += (num(m) - num(m+1))
        }else{
           sum+= (num(m)+num(m+1))
        }
       m++
    }
 
    return sum
 };

 let result = alternateDigitSum(521)

 console.log(result)