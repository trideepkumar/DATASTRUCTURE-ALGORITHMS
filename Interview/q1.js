// // const { prompt } = require("readline-sync");

// // // Prompt the user for input
// // const input = prompt("Enter a sentence: ");

// // function capitalizeSentence(sentence) {
// //     const words = sentence.split(' ');

// //     const capitalizedWords = words.map(word => {
// //         const firstLetter = word.charAt(0).toUpperCase();
// //         const restOfWord = word.slice(1).toLowerCase();
// //         return firstLetter + restOfWord;
// //     });

// //     return capitalizedWords.join(' ');
// // }

// // const capitalizedSentence = capitalizeSentence(input);
// // console.log(capitalizedSentence);

// const { prompt } = require("readline-sync");

// // Prompt the user for input
// const input = prompt("Enter a sentence: ");

// // Function to capitalize the first letter of each word
// function capitalizeSentence(sentence) {
//     let capitalized = '';
//     let capitalizeNext = true;

//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence[i];

//         if (char === ' ') {
//             capitalizeNext = true;
//             capitalized += char;
//         } else {
//             if (capitalizeNext) {
//                 capitalized += char.toUpperCase();
//                 capitalizeNext = false;
//             } else {
//                 capitalized += char.toLowerCase();
//             }
//         }
//     }

//     return capitalized;
// }

// const capitalizedSentence = capitalizeSentence(input);
// console.log(capitalizedSentence);


    const capitalize = (sentence)=>{
        const words = sentence.split('')

        const capitalizeWord = words.map((word)=>{
            if(word.length > 0){
                return word.charAt(0).toUpperCase()+word.slice(1)
            }else{
                return ''
            }
        
        })

         const result = capitalizeWord.join(' ')

         return result
    }

    let sentence = 'node is good'

   console.log( capitalize(sentence) )