const arr =[1,34, 56,'man']

arr.push(5)     //adding to last
arr.pop()       //removing from last
arr.unshift('bob') //adding to first of array
arr.shift()   //removing from the first

console.log(arr);


//for getting each values
for(const item of arr){
    console.log(item);
}

//map
//filter
//reduce
//concat
//slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1,3));