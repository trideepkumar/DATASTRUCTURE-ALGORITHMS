//sorting an alphabets in array

let arr = ['f', 'h', 'e', 't', 'u', 'x', 'd', 'j','a','z','c','b'];

for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr.length; j++) {
    if(arr[j] > arr[j+1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

console.log(arr);
