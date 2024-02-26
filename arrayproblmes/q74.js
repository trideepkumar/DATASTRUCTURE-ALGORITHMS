var isValid = function(s) {
    let stack = ['(', ')', '{', '}', '[',']']
    for(let i=0;i<s.length;i++){
        let index = stack.indexOf(s[i])
        if(s[i+1] === stack[index+1]){
            continue
        }else{
            return false
        }
    }

    return true
};

let s = "()[]{}"

console.log(isValid(s))
