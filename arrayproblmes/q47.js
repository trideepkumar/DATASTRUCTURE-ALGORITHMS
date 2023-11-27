const reverse = (word,ch)=>{
    let result = []
    for(let i=0 ;i<word.length ;i++){
        if(!word.includes(ch)){
            return word
        }
        if (word[i] === ch){
            for(let k=i ; k>=0 ;k--){
               result.push(word[k])
            }
            for(let j=i+1 ; j<word.length ;j++){
                result.push(word[j])
            }
            return result.toString().replace(/,/g, '')
         }
    }
}


let word = 'abcdefd'
let ch = 'd'

const result = reverse(word,ch)

console.log(result)