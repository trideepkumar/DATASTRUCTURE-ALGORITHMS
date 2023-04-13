const string = prompt("Enter a string")

let isPalindrome = true

for(let i=0; i<string.length/2 ;i++){
    if(string[i] !== string[string.length - 1 -i]){
        isPalindrome = false
        break
    }
}

if(isPalindrome){
    console.log('palindrome')
}
else{
    console.log('not palindorme');
}