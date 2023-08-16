const orgArr  = [1,2,3,4,5]

const result = orgArr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
})


console.log(result)


//runs a function on each elements of the array to produce a single value as the output
