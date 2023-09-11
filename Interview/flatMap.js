const arr = [1,[2,3,4],5,6,[8,9,10,11]]

const flatMap = arr.flatMap((n) => (Array.isArray(n) ? n.map((m) => m * 2) : n * 2));



console.log(flatMap)