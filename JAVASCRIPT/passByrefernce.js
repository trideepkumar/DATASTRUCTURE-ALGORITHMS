//pass by reference is for the non - primitive datatypes

const modifyArray = (arr)=>{
    arr.push(4)
}

const arr = [1,2,3]

modifyArray(arr)

console.log(arr)