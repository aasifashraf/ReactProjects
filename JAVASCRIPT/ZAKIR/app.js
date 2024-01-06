let myButton = document.querySelector('.myButton')
let container = document.querySelector('.container')
let hide = document.querySelector('.hide')
let msg = document.querySelector('.msg')
let currentDate = new Date()
let foundevent = 0
let increment = 3
console.log(`top ${increment}`)

myButton.addEventListener("click",(e)=>{
    // newClick()
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = dayNames[1];

    while (foundevent < increment){
        currentDate.setDate(currentDate.getDate() + 1)

        if(currentDate.getDay() === 1 && currentDate.getDate() === 1 && currentDate.getMonth() == 0 )
        {
            console.log(`${dayName} ${currentDate.getDate()} January ${currentDate.getFullYear()}`)
            foundevent++

            let createDiv = document.createElement('div')
            container.appendChild(createDiv)

            let pday = document.createElement('p')
            pday.innerHTML = dayName

            let pdate = document.createElement('p')
            pdate.innerHTML = `01 January`

            let pyear = document.createElement('p')
            pyear.innerHTML = currentDate.getFullYear()


            createDiv.appendChild(pday)
            createDiv.appendChild(pdate)
            createDiv.appendChild(pyear)
        }
    }
    setTimeout(function() {
        increment +=3
        console.log(increment)
    },100)

})

setTimeout(function() {
    msg.style.display = 'none'
   hide.style.display ='flex'
},5000)