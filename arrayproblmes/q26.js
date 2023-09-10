// print all the palindromic substrings in the sentence


function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    // console.log(reversedStr)
    return str === reversedStr;
  }
  
  function findAllPalindromicSubstrings(sentence) {
    const words = sentence.split(' ');
    console.log(words)
    const palindromes = [];
  
    for (const word of words) {
      for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
          const substring = word.substring(i, j);
          if (isPalindrome(substring) && substring.length>1) {
            palindromes.push(substring);
          }
        }
      }
    }
    console.log(palindromes)
    return palindromes;
  }
  
  const sentence = 'MALAYALAM IS A WONDERFUL WORD';
  const palindromicSubstrings = findAllPalindromicSubstrings(sentence);
  
  console.log('Palindromic Substrings:');
  console.log(palindromicSubstrings);
  