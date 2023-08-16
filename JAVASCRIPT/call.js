const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  };
  
  const person1 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  const person2 = {
    firstName: "Jane",
    lastName: "Smith"
  };
  
  console.log(person.fullName.call(person1, "New York", "USA"));
  console.log(person.fullName.call(person2, "London", "UK"));
  