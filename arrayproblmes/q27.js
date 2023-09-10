var divisibilityArray = function(word, m) {
    let splits = word.split('')
    // console.log(splits)
    let result = []
    for(let i=0 ; i<splits.length;i++){
        if(splits[i]%m === 0){
          result.push('1')
        }else{
            result.push('0')
        }
    }
    return result
};


const word ="1010011110001111111"
const  m = 10

console.log(divisibilityArray(word,m))