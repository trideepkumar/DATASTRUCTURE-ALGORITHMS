const person = {
    fullName  : function(city,country,arg3,arg4){
        return this.firstName + " " + this.lastName +" "+city +" "+ country+" "+arg3+" "+arg4
    }
}

const person1 = {
    firstName : "Bob",
    lastName  : "Marley"
}

const name = person.fullName.apply(person1,["florida" ,"paris","third","fourth"])

console.log(name)