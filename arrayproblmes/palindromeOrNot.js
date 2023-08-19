
const checkPlaindrome = (str)=>{
    let palindorme = true
    
    for(let i=0 ;i<str.length/2; i++){
        // console.log(str[i])
        if(str[i] !== str[str.length-1-i]){
            palindorme=false
            break
        }
    }
    if(palindorme){
        return console.log("palindrome")
    }else{
        return console.log("not a  palindrome")
    }
}

const str = "monkknom"

checkPlaindrome(str)