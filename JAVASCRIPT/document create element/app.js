let h1 = document.createElement('h1');
let input = document.createElement('input');

h1.innerHTML = " You can change the value of a field"
 
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", () =>{
    h1.innerHTML = input.value;
})