//shadowing

// const x = 10;

// function shadowExample() {
//   const x = 20;
//   console.log(x); // Prints 20
// }

// shadowExample();
// console.log(x); // Prints 10 


//illegal shadowing

const x = 10;

function illegalShadowing() {
  for (const x of [1, 2, 3]) {
    console.log(x); 
  }
}

illegalShadowing();
console.log(x); 