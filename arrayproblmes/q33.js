// const inputString = 'Hello, World!'

// const reverseStr = (str)=>{

//      let reversed = ''

//     for(let i =str.length -1 ; i >=0 ;i--){
//         reversed+=str[i]
//     }

//     return reversed

 
// }

// const result = reverseStr(inputString)

// console.log(result)


const inputString = 'Hello, World!'

const reverseStr = (str) => {

  const words = str.split(' ')
  console.log(words)

  const reversedWords = []

  words.forEach((word) => {
    const reversedWord = word.split('').reverse().join('')
    reversedWords.push(reversedWord);
  });

  return reversedWords.join(' ');
};

const result = reverseStr(inputString);

console.log(result);
