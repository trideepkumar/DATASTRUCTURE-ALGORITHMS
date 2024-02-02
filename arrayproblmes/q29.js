// I have an array named "carManufacturers", I need to figure out the second largest car manufacturer in terms of the length of the name of the car manufacturer. Write a programme for the same.


const carManufacturers = [
  "Toyota",
  "Ford",
  "Honda",
  "Volkswagen",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
]



// const secondLarMAnufacturer = (carManufacturers) => {

//   let m = carManufacturers.length;
//   console.log(m);

//   let CompanynameLen = carManufacturers.map((manufactur) => manufactur.length)

//   console.log(CompanynameLen);

//   let large = -Infinity;
//   let secLarge = -Infinity;
//   for (let i = 0; i < CompanynameLen.length; i++) {
//     if (CompanynameLen[i] > large) {
//       secLarge = large;
//       large = CompanynameLen[i];
//     } else if (CompanynameLen[i] > secLarge && CompanynameLen[i] !== large) {
//       secLarge = CompanynameLen[i];
//     }
//   }

//   let resultIndex = CompanynameLen.indexOf(secLarge);

//   return carManufacturers[resultIndex];
// };


const secondLarMAnufacturer =(carManufacturers)=>{

  const companyLen = carManufacturers.map((car)=>car.length)
  console.log(companyLen)
  let largest = -Infinity
  let secLarge = -Infinity
  for(let i=0 ; i<companyLen.length ;i++){
      if(companyLen[i]>largest){
        secLarge = largest
        largest = companyLen[i]
      }else if(companyLen[i]>secLarge && companyLen[i] !== largest){
           secLarge = companyLen[i]
        }
        }
      console.log(companyLen.indexOf(secLarge))
      let ind =companyLen.indexOf(secLarge)
        return carManufacturers[ind]
}
console.log(secondLarMAnufacturer(carManufacturers));
