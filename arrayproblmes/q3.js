const sameItem = (arr1,arr2)=>{
    let arr3 = []
    for(let i=0; i<arr1.length ;i++){
        for(let j=0 ; j<arr2.length ;j++){
            let includes =  false
            for(k=0 ; k<arr3.length ;k++){
                if(arr1[i]===arr3[k]){
                    includes = true
                    break
                }
            }    
            if(arr1[i]===arr2[j] && !includes){
                arr3.push(arr1[i])
            }
        }
    }
  return arr3
}

arr1 = [1,2,3,4,5,6,6]
arr2 = [4,5,6,7,8,9,7,7,77777,7,7,7]

const result = sameItem(arr1,arr2)
console.log(result)


//by using the object creating

function unique(arr1,arr2){
    let obj = {}
    let ar = []
    for(let i = 0;i<arr1.length;i++){

        if(obj[arr1[i]]==undefined){
            obj[arr1[i]] = 0
        }

        for(let j=0;j<arr2.length;j++){
            if(arr2[j]===arr1[i]){
                obj[arr1[i]]++
                console.log(obj[arr1[i]])
            }
            
        }
        console.log(obj)
        if(obj[arr1[i]]==1){
            ar.push(arr1[i])
        }
    }
    console.log(`array  ${ar}`)
    return ar
}

unique([1,2,3,3,4,4],[1,3,4,4,4,4,4])
