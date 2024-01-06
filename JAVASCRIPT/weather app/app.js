
let inputcity = document.querySelector(".city")
let srcbtn = document.querySelector("button")
let tempreture = document.querySelector(".celsius")
let humidity = document.querySelector(".jshumidity")
let windSpeed = document.querySelector(".wind")
let description = document.querySelector(".description")
let img = document.querySelector(".img")
let middlesection = document.querySelector(".middlesection")

async function callApi(city){
    const api = "a3b5d52436bb921fc556cadf2423c776"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    let fetchapi = await fetch(url).then(response => response.json())
    console.log(fetchapi)
    
    if(fetchapi.cod == '404'){
        img.src ="./images/ayein.jpg"
        tempreture.innerHTML= "Ayein"
        description.innerHTML =""
        console.log("error") 
        setTimeout(()=>{
            img.src="./images/clear.png"
            tempreture.innerHTML= "0 °C"
            description.innerHTML ="NA"
        },"2000")
    }

    humidity.innerHTML = `${Math.round(fetchapi.main.humidity)}`;
    tempreture.innerHTML = `${Math.round(fetchapi.main.temp-273.15)} °C`;
    description.innerHTML = fetchapi.weather[0].description
    windSpeed.innerHTML = `${fetchapi.wind.speed} km/h`

    switch(fetchapi.weather[0].main){
        case 'Clouds': img.src ="./images/cloud.png"
        break;
        case 'Clear': img.src ="./images/Clear.png"
        break;
        case 'Rain': img.src ="./images/Rain.png"
        break;
        case 'Fog': img.src ="./images/Mist.png"
        break;
        case 'Snow': img.src ="./images/Snow.png"
        break;
    }
}
srcbtn.addEventListener("click",(e)=>{
    callApi(inputcity.value)
    console.log(inputcity.value)
});