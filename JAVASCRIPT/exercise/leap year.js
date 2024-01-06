//find leap year
function isLeapYear(year) {
    return(year % 4 ===0 && year % 100 !== 0 || year % 400 ===0)
}


if(isLeapYear(2020)){
    console.log("Leap year")
}
else{
      console.log(`isn't leap year`)
}