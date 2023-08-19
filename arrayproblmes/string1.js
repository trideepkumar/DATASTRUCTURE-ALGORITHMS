const countConsistentStrings = (allowed, words) => {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let isConsistent = true;
        for (const char of words[i]) {
            if (!allowed.includes(char)) {
                isConsistent = false;
                break; 
            }
        }
        if (isConsistent) {
            count++;
        }
    }
    return count;
};

const allowed = "aabbaabbcc"

const words = ["aabbaa","abababababas","abababababab","aa"]

console.log(countConsistentStrings(allowed,words))