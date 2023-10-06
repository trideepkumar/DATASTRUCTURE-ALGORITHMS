//check whether the array can form arithematic sequenxe or not 

const arr = [-68,-96,-12,-40,16]

var canMakeArithmeticProgression = function(arr) {
    let sorted = arr.sort((a,b)=>b-a)
    console.log(sorted)
     let newDiff
    for(let i=0 ;i<sorted.length-1;i++){
       let difference = arr[i+1] - arr[i]
       
       console.log("differnce",difference)
           if(i===0){
            console.log("i=0")
              newDiff = difference
              console.log("newDiff",newDiff)
           }
           if(newDiff !== difference){
            return false
           }
    }
    return true
};

const result = canMakeArithmeticProgression(arr)

console.log(result)