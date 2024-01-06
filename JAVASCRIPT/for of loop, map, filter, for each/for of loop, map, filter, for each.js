//foreach topic
let arry = [1,5,9,8,7,8,9,8,6,3]
arry.forEach(function (items) {
    console.log(items)
});

// Result 1 5 9 8 7 8 9 8 6 3


// Filter Topic
let newArry = [];
let arry = [1, 5, 9, 8, 7, 8, 9, 8, 6, 3];

arry.filter(function (arrys) {
    if (arrys % 2 === 0) {
        newArry.push(arrys);
    }
});

console.log(newArry); // This will display the filtered even numbers in newArry




// Map topic
let arr = [1, 2, 3, 4];

let doubled = arr.map(function (element) {
    return element * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]






// Map topic
let items = []
const dron = {
    speed: 100,
    color: 'black'
}

let drons = Object.keys(dron)
drons.forEach(function(key) {
    items.push(key, dron[key])
});
console.log(items, items.length)




// lET US CHECK WEATHER TWO WORDS ARE ANAGRAM OR NOT

let a = "Listen";
let b = "silent";

function check() {
    let wordOne = a.toLowerCase().split('').sort().join('');
    let wordTwo = b.toLowerCase().split('').sort().join('');

    if (wordOne === wordTwo) {
        console.log(`These words are anagrams: (${a}) and (${b})`);
    } else {
        console.log(`These words are not anagrams`);
    }
}

console.log(check(a));


// ask user to on which time you want to get up
//greet him
// check the time 
// use condition
//setTimeout


const alarmTimeHours = prompt(`Please enter Hour Number`)
const alarmTimeMinutes = prompt(`Please enter Minute Number`)
alert(`Your Wake up time is scheduled to be ${alarmTimeHours}:${alarmTimeMinutes}`)

console.log(typeof alarmTimeHours, typeof alarmTimeMinutes)

function currentTimeP() {
    let currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (hours === alarmTimeHours && minutes === alarmTimeMinutes) {
        alert(`Wake up Its  ${alarmTimeHours}:${alarmTimeMinutes}`)
     }
      else {
            alert(`You need to sleep its ${hours}:${minutes}:${seconds}`)
};
    };
    reCall();
    function reCall (){
        currentTimeP()
    
    setTimeout(function(){
        reCall()
    },2000);
};


//for of loop to acces object keys values and entries
let arrys =[]
let details = {
    speed: "fast",
    color: "Red",
    companyName: "ABCD",
    plateNumber: 1234
}

let keys = Object.keys(details);
for ( let items of keys ) {
    arrys.push(items, details[items])
    // console.log(items, details[items])
}
// console.log(arrys)

let spellings = [];
arrys.forEach(function(items) {
    let broken = items.split(',');
    spellings.push(broken)
    // console.log(items)
    broken.forEach(function(cut) {
        spellings.push(cut)
        console.log(cut)
})
})


// here is how reduce method is working with strings
// it takes two arguments which are the accumulator and the current value

let user = [
    {firstname: 'John', lastname: 'catra', age: 26},
    {firstname: 'Aasif', lastname: 'Ashraf', age:21},
    {firstname: 'Aafaq', lastname: 'Ahmad', age:56 },
    {firstname: 'Manan', lastname: 'iqbal', age:26 }
]
// let newData = {}
let reduceddata = user.reduce((acc, curr)=>{
    if(curr.age == 26){
    acc.push(`${curr.firstname} ${curr.lastname} and his age is ${curr.age}`)
        // console.log (`${curr.firstname} ${curr.lastname} and his age is ${curr.age}`)
    }
    return acc;
},[]);

console.log(reduceddata)