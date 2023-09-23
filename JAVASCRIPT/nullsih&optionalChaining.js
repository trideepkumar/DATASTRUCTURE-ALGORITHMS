//nullish operator

// By using nullish operator we can set a default value  when the present value is 
// undefined or null

const result = variable ?? "Default Value";




//optional chaining operator

//it is used to access the propertiwes and methods of object that do 
//  not  exist or not

const user = {
   name :'bob',
   age:12
}

const Details = user?.address?.street
const age  = user?.age

console.log(Details)
console.log(age)
