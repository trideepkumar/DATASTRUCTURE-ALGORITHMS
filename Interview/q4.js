const arr1 = [1,2,6,4,5]
const arr2 = [3,4,2,8]

let newArr = arr1.concat(arr2)

 console.log(newArr)

 const asc = (newArr)=>{
for(let i =0 ; i<newArr.length ; i++){
    for(let j =i+1 ; j<newArr.length ;j++){
        if(newArr[i] >  newArr[j]){
            let temp = newArr[i]
              newArr[i] = newArr[j]
              newArr[j] = temp
        }
    }
}
return newArr
}

console.log(asc(newArr))