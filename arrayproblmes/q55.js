var percentageLetter = function(s, letter) {
    let count = 0
   for(let i =0 ; i<s.length;i++){

       if(s[i]=== letter){
        count++
       }

   }

   return count?Math.floor((count/s.length)*100):0

};


const s ="foobar"
const letter = "o"

const result = percentageLetter(s,letter)

console.log(result)