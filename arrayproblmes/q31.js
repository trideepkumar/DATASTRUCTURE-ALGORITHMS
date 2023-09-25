//sort the array with respect to its increasing length of elements

const carManufacturers = [
  "Toyota",
  "Ford",
  "Honda",
  "Volkswagen",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
];


// Use the sort method with a comparison function

// const sortCar = (arr) => {
//     const sortedArray = arr.sort((a, b) => {
//       return a.length - b.length;
//     });
  
//     return sortedArray;
//   };
  
//using the normal functions 

// const sortCar = (arr)=>{
//     const lengthResult = arr.map((carLen) => {return {element:carLen, length:carLen.length}} )
//           lengthResult.sort((a,b)=> a.length - b.length)

//     const sortedArray = lengthResult.map((car) => {return car.element})

//     return sortedArray
// }
  



//   console.log(sortCar(carManufacturers));


//finding the length and sorting 

const sortArr = (arr)=>{

    let length = arr.map((car)=>{return{name:car, length:car.length}})

    length.sort((a,b)=>a.length-b.length)

    let sortedArray = length.map((car)=> {return car.name})

    return sortedArray
    
}

console.log(sortArr(carManufacturers))