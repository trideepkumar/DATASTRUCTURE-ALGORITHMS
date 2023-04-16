// const fibonacci = (n)=>{
//     if(n === 0  || n===1){
//         return console.log('0/1');;
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }



// for(let i=0 ; i<= 10 ;i++){
//     console.log(fibonacci(i));
// }

const fibonacci = (n) => {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
  
  for (let i = 0; i <= 10; i++) {
    console.log(fibonacci(i));
  }
  