// // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// // Given a string s, return true if it is a palindrome, or false otherwise.
// // Example 1:
// // Input: s = "A man, a plan, a canal: Panama"
// // Output: true
// // Explanation: "amanaplanacanalpanama" is a palindrome.

const s = "0P"

    const ispalindrome = (s)=>{
        let newArr = []
        let strArr = s.split('')
        console.log(strArr)
        let palindrome = true
        if(strArr.length>=1){
            palindrome = true
        }else if(strArr.length === 0){
            palindrome = true
        }else{
            palindrome = false
        }
        for(let i = 0 ; i<strArr.length ;i++){

            if(strArr[i].match(/[a-z]/i) || strArr[i].match(/[0-9]/)){
            newArr.push(strArr[i].toLowerCase())
            }
        }
        console.log(newArr)
       
        for(let j =0 ; j<(newArr.length/2); j++){
            if(newArr[j] === newArr[(newArr.length-1)-j]){
                palindrome = false
                break;
            }
        }
        if(palindrome){
            console.log("str is palindrome")
        }else{
            console.log("string is not a palindrome")
        }
    }


ispalindrome(s)




