//1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date()
let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()

let days = today.getDay()
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let getday = day[days]

//Get PM  and AM
let amPm = (hours >= 12)? "Pm" : "AM"

//Reassigning hours and changing format
hours = (hours >= 12)? hours -12 : hours

if (hours === 0 && amPm === "PM") {
    if (minutes === 0 && seconds === 0){
        hours = 12
        amPm ="AM"
    }
}
if (hours === 0 && amPm === "AM") {
    if (minutes === 0 && seconds === 0){
        hours = 12
        amPm = "PM"
    }
}

console.log(`${getday} ${hours}: ${minutes} :${seconds} ${amPm}`)
