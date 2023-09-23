const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName ;
    }
  }
  
  const person1 = {
    firstName: "John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName: "Jane",
    lastName: "Smith"
  }
  
  console.log(person.fullName.call(person1))
  // console.log(person.fullName.call(person2, "London", "UK"))
  


