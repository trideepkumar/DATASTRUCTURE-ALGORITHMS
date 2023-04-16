//calculate the sum of the digits of a numbers using recursion

const sum = (n)=>{
    if(n<10){
    return n
    }
     const lastdigit = n%10
     const remaining = Math.floor(n/10)
     return lastdigit+sum(remaining)
    }

console.log(sum(1234))