// function findFrequency(arr) {
//     const frequency = {};
  
    
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       frequency[element] = (frequency[element] || 0) + 1;
//     }
  
//     return frequency;
//   }
  

function findFrequency(arr){
  let frequency = {}
  arr.forEach((Element)=>{
    if(!frequency[Element]){
       frequency[Element] =1
    }else{
      frequency[Element]++
    }
  })

  return frequency
}
 
  const arr = [1, 2, 3, 2, 4, 1, 3, 3, 2, 4];
  const result = findFrequency(arr);
  console.log(result);
  