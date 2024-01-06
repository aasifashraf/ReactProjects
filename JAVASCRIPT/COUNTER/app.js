let decreasebtn = document.querySelector(".decrease")
let increasebtn = document.querySelector(".Increase")
let resetbtn = document.querySelector(".reset")

let counter = document.querySelector(".counterNumber")

counterNumber = 0 

decreasebtn.addEventListener("click", function(){
counterNumber--
counter.textContent = counterNumber
console.log(counterNumber)
});

increasebtn.addEventListener("click", function(){
counterNumber++
counter.textContent = counterNumber
console.log(counterNumber)
});

resetbtn.addEventListener("click", function(){
    counterNumber = 0
    counter.textContent = counterNumber
    console.log(counterNumber)
    });
