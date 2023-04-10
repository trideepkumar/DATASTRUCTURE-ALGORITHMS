const arr = [1,2,3,4,4,5,5]
const len = arr.length

for(let i=0; i<len; i++){
    for(let j=i+1; j<len;j++){
        if(arr[i]===arr[j]){
            console.log(arr[i]);
        }
    }
}