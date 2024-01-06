const arr = [1,2,3,4,5,6,7,8,9,"a","b","c","d","f"]

let btn = document.getElementById("btn")
let color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    console.log("button clicked")
    
    let hex ="#"
    for(let i =0; i<6;i++) {
        hex += arr[getRandomNumber()]
    }
    
    color.textContent = hex
    document.body.style.background = hex
});

getRandomNumber = () => {
   return Math.floor(Math.random() * arr.length)
  
}; 