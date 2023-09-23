

function ab(x,y){
    console.log(x+y)
}

//currying

function bc(x){
  return  function cd(y){
            return console.log(x+y)
    }
}

const add = bc(10)
const result = add(100)

console.log(result)

