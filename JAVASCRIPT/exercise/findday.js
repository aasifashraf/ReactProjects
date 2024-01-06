//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050

for(let year = 2014; year <= 2050; year++){
    let dateIs = new Date(year,0,1)
    if(dateIs.getDay()=== 0)
    console.log(year)
    
}
