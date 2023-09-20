const person = {
    fullName  : function(city,country){
        return this.firstName + " " + this.lastName +" "+city +" "+ country
    }
}

const person1 = {
    firstName : "Bob",
    lastName  : "Marley"
}

const name = person.fullName.apply(person1,["florida" ,"paris"])

console.log(name)