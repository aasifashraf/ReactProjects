let array = ["orange", "green", "blue", "green", "orange", "blue", "orange"];
let obj = {};


for( let i = 0; i < array.length; i++ ) {
  let word = array[i];

  if (!obj [word]) {
    obj[word] = 1
  }
  else {
    obj[word]++
  }
}
console.log(obj)

// let try to rest parameters
let total = 0;

function spreadptr (...itemms) {
   return (itemms.reduce((acc, curr)=> acc += curr,0))
}
console.log(spreadptr(1,3,6,9,6,8,6,5))

//let us try spread operator

let array1 = ["hello"]
let array2 = [1,2,3,4,"a"]
let array3 = array2.splice(2,2,"ROAD")
console.log(array3)
console.log(array2)