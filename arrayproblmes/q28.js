//replace vowels

const str = 'trideep'

// const replaceVowels = (str)=>{
//     let letters = str.split('')
//     let vowels = ['a','e','i','o','u']
//     for(let i =0 ;i< letters.length ;i++){
//         for(const item of vowels){
//             if(item === letters[i]){
//                 letters[i] = '#'
//             }
//         }
//     }
//     return letters.join('')
// }

const result = str.replace(/[aeiou]/g , '#')



console.log(result)