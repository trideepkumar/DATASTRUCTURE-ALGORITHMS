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

//Code in an asynchronous way

// Modified sortArr function with asynchronous functionality

const sortArrAsync = async (arr) => {
    try {

      const fetchedData = await fetchData(arr)
  
      console.log(fetchedData)
  
      const length = fetchedData.map((car) => ({
        name: car,
        length: car.length,
      }));
  
      length.sort((a, b) => a.length - b.length)
  
      const sortedArray = length.map((car) => car.name)
  
      return sortedArray
    } catch (error) {
      console.error("An error occurred:", error)
      throw error;
    }
  };
  
  const fetchData = (arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(arr);
      }, 2000);
    });
  };
  
  // Call the sortArrAsync function correctly using await
  (async () => {
    try {
      const sortedCarManufacturers = await sortArrAsync(carManufacturers);
      console.log(sortedCarManufacturers);
    } catch (error) {
      console.error("Error while sorting:", error);
    }
  })();
  