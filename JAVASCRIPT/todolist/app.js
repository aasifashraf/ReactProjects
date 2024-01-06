let input = document.querySelector("input")
let addbtn = document.querySelector("button")
let list = document.querySelector(".list")
let li = document.querySelector("li")
let removebtn = document.querySelector(".btnn")
let ayein = document.querySelector(".ayein")
let container = document.querySelector(".container")

addbtn.addEventListener("click", function(e){

    if(input.value!==""){
        //added appended list here
        let li = document.createElement("li")
        li.innerHTML = input.value
        list.appendChild(li)

        //added delete button here
        let span = document.createElement("span")
        span. innerHTML = `<button class="btnn"><i class="fa-solid fa-trash"></i></button>`
        li.appendChild(span)
        container.style.borderRadius ="10px"
        saveData()

    }
    else{
        ayein.style.display = "flex"
        container.style.borderRadius ="0px 0px 10px 10px"
        setTimeout(() => {
        container.style.borderRadius ="10px"
            ayein.style.display = "none" 
        }, 3000);
        saveData()
    }
    input.value = ""
        
})

list.addEventListener("click", (e)=>{
    if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked")
    }
    saveData()
})

list.addEventListener("click", (e)=>{
    if(e.target.parentNode.parentElement.parentNode.tagName ==="LI"){
        e.target.parentNode.parentElement.parentNode.remove();
        console.log(e.target.parentNode.parentElement.parentNode);
    }
    saveData()
})
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data") || ""; 
}

showData();
