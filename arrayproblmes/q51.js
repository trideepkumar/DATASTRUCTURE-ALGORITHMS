var firstPalindrome = function(words) {
    let palindrome = false
    for(let i=0 ; i<words.length ;i++){
        let word = words[i].split('')
        if(word.length === 1){
            return words[i]
        }
        console.log(word)
        for(let j = 0 ;j< Math.floor(word.length/2) ; j++){
            if(word[j] === word[word.length-1-j]){ 
                palindrome = true
            }else{
                palindrome = false
                break
            }
        }
        if(palindrome){
            return words[i]
        }
    } 
    return ""
};

const words = ["abc","car","ada","racecar","cool"]

const result = firstPalindrome(words)

console.log(result)