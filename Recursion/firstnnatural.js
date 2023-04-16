const natural = (n)=>{
    if(n === 0){
        return []
    }
    const arr = natural(n-1)
    arr.push(n)
    return arr
}

const arr = natural(10)
console.log(arr)


//without using arrays 

const Nnatural = (n) => {
    if(n === 0){
        return 
    }
    Nnatural(n-1)
    console.log(n);
}

Nnatural(20)