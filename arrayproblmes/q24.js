// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

var arrayStringsAreEqual = function(word1, word2) {
    let str1 
    for(let i = 0 ; i<word1.length ;i++){
        str1+=word1[i]
    }
    let str2 
     for(let i = 0 ; i<word2.length ;i++){
        str2+=word2[i]
    }

    if(str1 === str2){
        return true
    }
    else{
        return false
        
    }
};