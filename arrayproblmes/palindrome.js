// const string = prompt("Enter a string")
const palindorme =(str)=>{
let isPalindrome = true

for(let i=0; i<str.length/2 ;i++){
    if(str[i] !== str[str.length - 1 -i]){
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

}


const str = 'MALAYALAM'

palindorme(str)