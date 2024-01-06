let userinput = document.querySelector (".userinput");
let button = document.querySelector (".button");
let insertion = document.querySelector(".output")
let remove = document.querySelector(".remove");

let data = [];

button.addEventListener("click", () => {
        const strings = userinput.value;
        data.push(strings)
    console.log(data)
   userinput.value ="";
   render();
});


function render() {
    let cancatinatevales = ""
   for (let i = 0; i < data.length; i++) {
       let todo = data[i];
       cancatinatevales += `<div> <p>${todo}</p> <button class="remove">Remove</button><div>`
    }
       insertion.innerHTML = cancatinatevales
       console.log(cancatinatevales)
}

output.addEventListener("click", (e) => {
    if(e.target.tagName === "DIV"){
        e.target.parentElement.remove()
        console.log(e.target.tagName)
    }
})
