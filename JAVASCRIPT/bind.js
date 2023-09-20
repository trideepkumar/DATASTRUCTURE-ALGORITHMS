const person = {
   fullName : function(){
     return this.firstName + " " + this.lastName
   }
}

const person1 = {
    firstName : "Bob",
    lastName : "Marly"
}

const person2 = {
    firstName : "pablo",
    lastName  : "Escobar"
}

const result1 = person.fullName.bind(person1)
const result2 = person.fullName.bind(person2)

console.log(result1())
console.log(result2())


