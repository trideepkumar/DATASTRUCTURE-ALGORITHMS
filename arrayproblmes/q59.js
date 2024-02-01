var isFascinating = function(n) {

    let two = 2 * n;
    let three = 3 * n;
    let num = n.toString()+two.toString()+three.toString();
    

    let digits = ['1','2','3','4','5','6','7','8','9']

    for (let i=0 ;i<num.length;i++){
        
       if(!num.includes(digits[i])){
          return false
       }
    }
    
    return true
};


console.log(isFascinating(192))