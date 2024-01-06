// replace the last of this array
let array = [1,2,3,4,5];
let lastNum = array.length -1
array[lastNum] = 99
console.log(array)



//create a function and also take a parameter  and  return last value in the 
function getLastValue (list){
    let lastItem = list.length-1
    return list[lastItem]
}
getLastValue (["apple", "bar", "car", "red", "blue"]);



//create a function arraySwap *array) thattakes an array and returns an array where the first and last values are swapeed or switeche
function createArraySwap(arraySwap){
    if(arraySwap.length < 2){
        alert("Please enter at least 2 values");
        return arraySwap;
    }

    [arraySwap[0],arraySwap[arraySwap.length-1]] = [arraySwap[arraySwap.length-1], arraySwap[0]]
    return arraySwap;
    
}
arraySwapping = ["apple", "android", "fire", "chrome"]
let result = createArraySwap(arraySwapping)
console.log(result)


//Create a for loop that counts up from 0 to 10, but counts up by 2.

let i = 1
let values =""
for (let i = 0; i <= 10; i++){

    if(i % 2 == 0){
        values +=`${i},`
    }
    else{
        "something went wrong"
    }
}

console.log(values)



//Create a for loop that counts down from 5 to 0
list =""

for ( let i = 5; i >=0  ; i--){
    list +=`${i},`
}
console.log(list)



//Do exercises above exercises using while loops
let items = ""
let y = 0;
while (y <=10){
    if(y % 2 == 0 ){
        items += `${y},`
    }
    y++
}
console.log(items)



//Do exercises above exercises using while loops
let store = 5;
let storeItems = ""

while (store >= 0){
    storeItems += `${store},`
    store--
}
console.log(storeItems)


//create a function addone(array) that takes an array of numbers and returns an array where each number is increased by 1
let drons = [1, 2, 3, 4, 5]
let frons = []
function addone(array) {
    for (let i =0; i < drons.length; i++){
        // drons[i]++
        frons.push(drons[i]+ 1)

    }
}
addone(drons)
console.log(frons)
console.log(drons)


// Create a fuction add Arrays (array,number) that takes an array of number and returns an array whre each number is increased by num.

let resulty =[]
function addNum(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        resulty.push (arr[i] + num)
    }
}
addNum([1,2,3,4,5,6,7,8,9,10],2)
console.log(resulty)


//Create a function addArrays (array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.

let storeArrays = []

function addArrays(array1, array2) {
    if(array1.length === array2.length){
        for (let i = 0; i < array1.length; i++) {
            storeArrays.push(array1[i] + array2[i])
        }
        
    }
    else {
        console.log("items have not same length")
    }

}

addArrays([1,2,3,4,5], [1,2,3,4,4])  
console.log(storeArrays)



// Create a function count Positive (nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.

let positiveNums = 0
    function arrayNums(array) {
        for (let i = 0; i < array.length; i++) {
            if(array[i] > 0) 
            positiveNums+=1
        }
    }
arrayNums([-1,5,-8,-5,5,9,,])
console.log(positiveNums)



// find the lower number of numbers in the array
let min = Infinity
let max = -Infinity

function findMinMax (minMax){
    for(let i = 0; i < minMax.length; i++){ 

        if(minMax[i] < min ){
            min = minMax[i]
            console.log(min)
        }

        if(minMax[i] > max){
            max = minMax[i]
            console.log(max)

        } 
    }
}

findMinMax([5,8,9,2,5,99,75,5,3, 9])
console.log(min,max)


//pass array count how many words are repeated more than more in object  e

function countDown (words){

    let result = {}
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
    
        if(!result[word]){
            result[word] = 1;
        }

        else{
            result[word]++
        }         
    }
    return result;
}

console.log(countDown(['apples','apples','orange', 'grape;']))

// sort method







