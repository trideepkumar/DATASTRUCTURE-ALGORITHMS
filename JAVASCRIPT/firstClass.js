function greet(name){
    console.log(`hello ${name}`)
}

function greetTrideep(callback){
    const name = "Trideep"
    callback(name)
}

greetTrideep(greet)