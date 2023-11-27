const removeDuplicates = (arr)=>{
    let j=0
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== arr[j]){
            j++
            arr[j] = arr[i]
        }
    }
    arr.length = j + 1
    return arr.length
}


// const removeDuplicates = (arr) => {
//     const seen = {};
//     let i = 0;
    
//     for (let j = 0; j < arr.length; j++) {
//       if (!seen[arr[j]]) {
//         seen[arr[j]] = true;
//         arr[i] = arr[j];
//         i++;
//       }
//     }
    
//     arr.splice(i, arr.length - i);
//     return arr.length;
//   }

const dupli = (arr)=>{
    let duplicates = []
    let dupObj = {}

    for(let item of arr){
        if(!dupObj[item]){
            duplicates.push(item)
        }else{
            dupObj[item] = true
        }
    }
    return duplicates
}
  


const arr = [1, 1, 2, 2, 3, 4, 5, 5]
const length = removeDuplicates(arr)
const result = dupli(arr)
console.log(arr) 

console.log("result",result)
