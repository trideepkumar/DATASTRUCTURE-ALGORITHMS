const furthestDistanceFromOrigin = (moves) => {
    
    // let m =0
    // let n = 0
    // let count = 0
    // for(let i=0 ;i<moves.length;i++){
    //     if(moves[i]==='L'){
    //         m++
    //     }else if(moves[i] === 'R'){
    //         n++
    //     }else{
    //         count++
    //     }
    // }
    // return Math.abs(m-n)+count

    let count = 0, countU = 0
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            count++;
        } else if (moves[i] === 'R') {
            count--
        } else {
            countU++
        }
    }
    return Math.abs(count) + countU
};

let moves = '_R__LL_'
console.log(furthestDistanceFromOrigin(moves))