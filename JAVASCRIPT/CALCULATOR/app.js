let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons)
console.log(arr)

string= ""

arr.forEach(buttons => {
    buttons.addEventListener('click',(e) => {
        if(e.target.innerHTML === "AC"){
            input.value = "Ayein!"
            setTimeout(() => {
                string = ""
                input.value = ""
                console.log(string)
            },"2000")
        }
        else if (e.target.innerHTML === "DEL"){
            string = string.substring(0,string.length-1)
            input.value = string
        }
        else if(e.target.innerHTML === "="){ 
            let total = eval(string)
            input.value = total
        }
        else if (string.length >= 11){
            alert("Only 11 digits allowed")
            string =string.substring(0,10)
            console.log(string)
        }
        else{
            string += e.target.innerHTML
            input.value = string
    
        }
    })
    
});