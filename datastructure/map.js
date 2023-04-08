//to create a map we should call a map constructor
const map = new Map([['a',1],['b',2]])

map.set('c',3)    //for adding values to the map 
console.log(map.has('a'))   //for finding the values existing or not
map.delete('c')    //for deleting the elements
console.log(map.size);   //for finding the size

for (const [key,value] of map){
    console.log(`${key} : ${value}`);
}
