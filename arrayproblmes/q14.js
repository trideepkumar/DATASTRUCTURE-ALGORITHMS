var hasGroupsSizeX = function(deck) {
    let newArr = []
    let left = 0
    let right = deck.length -1
    if(deck.length>1){
    while(left <= right){
        if(deck[left] === deck[right]){
            newArr.push([deck[left],deck[right]])
        }else{
            return false
        }
        left++
        right--
    }
    }
    else{
        return [false]
    }
   
    return [...newArr]
};

console.log(...hasGroupsSizeX([1]))