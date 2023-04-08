const obj = {
    name : 'bob',
    age :'30',
    "proffesion" : "singer",
     sayName : function(){
           console.log(this.name);
    }
} 

// console.log(obj.proffesion)
// console.log(obj['proffesion']);

// obj.smoker = 'YES'
// console.log(obj);
// delete obj.smoker
// console.log(obj);

obj.sayName()


//object methods

ObjectKeys = Object.keys(obj)
console.log(ObjectKeys);
objectValues = Object.values(obj)
console.log(objectValues);
objectEntries = Object.entries(obj)
console.log(objectEntries);