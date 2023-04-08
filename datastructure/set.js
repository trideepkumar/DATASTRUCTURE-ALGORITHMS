//to  create a set we should call a set constructor

const set = new Set([1,2,3])

set.add(4)   //for adding to set //duplicates cannot be added 

// console.log(set.has(7))    //for finding an element exist or not 

// set.delete(3)   //for deleting an element in the set 
console.log(set.size);  //for finding the size of the set
set.clear()           //for clearing the all elements in the array

for(const item of set){
    console.log(item);
}