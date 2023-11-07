const  n = 123456789



// var thousandSeparator = function(n) {
//     let str = n.toString().split('')
//     let newArr = []
//     for(let i=0;i<str.length;i++){
//         if( ((str.length-i)% 3 === 0) && (str.length>3) && i!==0){
//             newArr.push('.')
//         }
//         newArr.push(str[i])
//     }

//    return  newArr.join('')
// };


var thousandSeparator = function(n) {
    const str = n.toString();
    const newArr = [];
    
    str.split('').reverse().forEach((digit, index) => {
        if (index > 0 && index % 3 === 0) {
            newArr.push('.');
        }
        newArr.push(digit);
    });

    return newArr.reverse().join('');
};

const result = thousandSeparator(n)

console.log(result)