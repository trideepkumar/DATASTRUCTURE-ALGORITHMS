let s ="book"

var halvesAreAlike = function(s) {
   let length = s.length/2
   let a = s.slice(0,length)
   let b = s.slice(length)

   //function to check whether  the value is an vowel

   const isVowel = (str)=>{
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let count = 0
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count 
   }

   let left = isVowel(a)
   let right = isVowel(b)

   return left === right
};


let result = halvesAreAlike(s)

console.log(result)