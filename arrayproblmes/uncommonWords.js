// const uncommonWords = (s1,s2)=>{
//     const words ={}

//     s1.split(' ').forEach(word => {
//         words[word] = (words[word] || 0) + 1;
//     });

//     s2.split(' ').forEach(word => {
//         words[word] = (words[word] || 0) + 1;
//     });

//     console.log(words)

//     const uncommonWords = [];

//     for (const word in words) {
//         if (words[word] === 1) {
//             uncommonWords.push(word);
//         }
//     }

//     return uncommonWords;
// }

const uncommonWords = (s1, s2) => {
  let words = {};

  s1.split(" ").forEach((word) => {
    words[word] = (words[word]||0) + 1;
  });

  s2.split(" ").forEach((word) => 
  {(words[word] = (words[word]||0) + 1)});
  

  let result = []

  for(const word in words){
    if(words[word] === 1){
        result.push(word)
    }
  }

  return result

};


const s1 = "this apple is sweet";
const s2 = "this apple is sour";

console.log(uncommonWords(s1, s2))
