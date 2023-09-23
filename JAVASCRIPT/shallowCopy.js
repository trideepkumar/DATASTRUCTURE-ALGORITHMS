//Both shallow copy and deep copy are used for cloning the objects


//shallow copy
//  means that only the first level of the object is copied. 
//  Deeper levels are referenced.(the nested elements are referenced ... and we can manipulate the nested eleements)


const obj = {
    name :'bob',
    age :21,
    place :[
        'kollam',
        'kerala'
    ]
}

const shallowCopy = {...obj}

shallowCopy.name = 'marley'
shallowCopy.place[0] = 'manali'

console.log(shallowCopy)

console.log(obj)



//deep copy

// means that all levels of the object are copied. 
// This is a true copy of the object.

const deepCopy = JSON.parse(JSON.stringify(obj))

console.log("deep",deepCopy)

deepCopy.name = 'PABLO'
deepCopy.place[0] = 'kulu'


console.log(deepCopy)


console.log("after deep copy original ",obj)
