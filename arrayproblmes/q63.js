// const arr = [5,7,1,0,9,1,6,3,7,0,1,5]

// const repeatedElemente = (arr)=>{
//     let newArr = []
//     for(let i=0 ; i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]&&!newArr.includes(arr[i])){
//                   newArr.push(arr[i])
//             }
//         }
//     }

//     return newArr
// }

// const result = repeatedElemente(arr)

// console.log(result)


const repeatedElementsWithoutIncludes = (arr) => {
    const repeatedElements = [];

    for (let i = 0; i < arr.length; i++) {
        let isRepeated = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                isRepeated = true;
                break;
            }
        }
        if (isRepeated && !repeatedElements.includes(arr[i])) {
            repeatedElements.push(arr[i]);
        }
    }

    return repeatedElements;
};

const arr = [5, 7, 1, 0, 9, 1, 6, 3, 7, 0, 1, 5];
const result = repeatedElementsWithoutIncludes(arr);

console.log(result);
