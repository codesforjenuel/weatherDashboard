const searchBtn = document.querySelector(".searchButton");
const input = document.querySelector("input")
let city = document.querySelector(".displayCity")
let temp1 = document.querySelector(".temp1")
let wind1 = document.querySelector(".wind1")
let humid1 = document.querySelector(".humid1")
let uv1 = document.querySelector(".uv1")
let img1 = document.querySelector("#img1")
let temp2 = document.querySelector(".temp2")
let wind2 = document.querySelector(".wind2")
let humid2 = document.querySelector(".humid2")
let uv2 = document.querySelector(".uv2")
let img2 = document.querySelector("#img2")
let temp3 = document.querySelector(".temp3")
let wind3 = document.querySelector(".wind3")
let humid3 = document.querySelector(".humid3")
let uv3 = document.querySelector(".uv3")
let img3 = document.querySelector("#img3")
let temp4 = document.querySelector(".temp4")
let wind4 = document.querySelector(".wind4")
let humid4 = document.querySelector(".humid4")
let uv4 = document.querySelector(".uv4")
let img4 = document.querySelector("#img4")
let temp5 = document.querySelector(".temp5")
let wind5 = document.querySelector(".wind5")
let humid5 = document.querySelector(".humid5")
let uv5 = document.querySelector(".uv5")
let img5 = document.querySelector("#img5")
let temp6 = document.querySelector(".temp6")
let wind6 = document.querySelector(".wind6")
let humid6 = document.querySelector(".humid6")
let uv6 = document.querySelector(".uv6")
let img6 = document.querySelector("#img6")
let currentDate = document.querySelector(".currentDate")
let cityDiv = document.querySelector(".citySearch")
let storeAge = localStorage.getItem("myCity");




searchBtn.addEventListener("click", ()=> {
   let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${input.value}&days=6&aqi=no&alerts=no`
 


   fetch(api)
   .then(response => response.json())
.then((data) => {
console.log(data)
let lon = data.location.lon
let lat = data.location.lat
let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=0fbaf1cc084855e3c67d7756d3d6a0f6`
fetch(api2)
.then(response => response.json())
.then((data2)=>{
   console.log(data2)
   console.log(data2.daily[0].weather[0].icon)
   temp2.textContent = `Temp ${data2.daily[0].temp.day}`
   wind2.textContent = `Wind ${data2.daily[0].wind_speed} MPH`
   humid2.textContent = `Humidity ${data2.daily[0].humidity}`
   uv2.textContent = `Uv ${data2.daily[0].uvi}`
   img2.src = data2.daily[0].weather[0].icon
img2.classList.remove("hidden")

temp3.textContent = `Temp ${data2.daily[1].temp.day}`
   wind3.textContent = `Wind ${data2.daily[1].wind_speed} MPH`
   humid3.textContent = `Humidity ${data2.daily[1].humidity}`
   uv3.textContent = `Uv ${data2.daily[1].uvi}`
   img3.src = data2.daily[1].weather[0].icon
img3.classList.remove("hidden")

temp4.textContent = `Temp ${data2.daily[2].temp.day}`
   wind4.textContent = `Wind ${data2.daily[2].wind_speed} MPH`
   humid4.textContent = `Humidity ${data2.daily[2].humidity}`
   uv4.textContent = `Uv ${data2.daily[2].uvi}`
   img4.src = data2.daily[2].weather[0].icon
img4.classList.remove("hidden")

temp5.textContent = `Temp ${data2.daily[3].temp.day}`
   wind5.textContent = `Wind ${data2.daily[3].wind_speed} MPH`
   humid5.textContent = `Humidity ${data2.daily[3].humidity}`
   uv5.textContent = `Uv ${data2.daily[3].uvi}`
   img5.src = data2.daily[3].weather[0].icon
img5.classList.remove("hidden")

temp6.textContent = `Temp ${data2.daily[4].temp.day}`
   wind6.textContent = `Wind ${data2.daily[4].wind_speed} MPH`
   humid6.textContent = `Humidity ${data2.daily[4].humidity}`
   uv6.textContent = `Uv ${data2.daily[4].uvi}`
   img6.src = data2.daily[4].weather[0].icon
img6.classList.remove("hidden")


})


temp1.textContent = `Temp ${data.current.temp_f}`
wind1.textContent = `Wind ${data.current.wind_mph} MPH`
humid1.textContent = `Humidity ${data.current.humidity}`
uv1.textContent = `Uv ${data.current.uv}`
img1.src = data.current.condition.icon
img1.classList.remove("hidden")
console.log(data.forecast.forecastday[0].date)
currentDate.textContent = data.forecast.forecastday[0].date




   let cityReturn = city.textContent = data.location.name
   
   localStorage.setItem("myCity",cityReturn)





   let storageDisplay = document.createElement("button")
   storageDisplay.textContent = input.value
   cityDiv.append(storageDisplay)
 storageDisplay.addEventListener("click", () => {

      let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${storageDisplay.textContent}&days=6&aqi=no&alerts=no`
 


   fetch(api)
   .then(response => response.json())
.then((data) => {
console.log(data)
city.textContent = data.location.name

let lon = data.location.lon
let lat = data.location.lat
let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=0fbaf1cc084855e3c67d7756d3d6a0f6`
fetch(api2)
.then(response => response.json())
.then((data2)=>{
   console.log(data2)
   console.log(data2.daily[0].weather[0].icon)
   temp2.textContent = `Temp ${data2.daily[0].temp.day}`
   wind2.textContent = `Wind ${data2.daily[0].wind_speed} MPH`
   humid2.textContent = `Humidity ${data2.daily[0].humidity}`
   uv2.textContent = `Uv ${data2.daily[0].uvi}`
   img2.src = data2.daily[0].weather[0].icon
img2.classList.remove("hidden")

temp3.textContent = `Temp ${data2.daily[1].temp.day}`
   wind3.textContent = `Wind ${data2.daily[1].wind_speed} MPH`
   humid3.textContent = `Humidity ${data2.daily[1].humidity}`
   uv3.textContent = `Uv ${data2.daily[1].uvi}`
   img3.src = data2.daily[1].weather[0].icon
img3.classList.remove("hidden")

temp4.textContent = `Temp ${data2.daily[2].temp.day}`
   wind4.textContent = `Wind ${data2.daily[2].wind_speed} MPH`
   humid4.textContent = `Humidity ${data2.daily[2].humidity}`
   uv4.textContent = `Uv ${data2.daily[2].uvi}`
   img4.src = data2.daily[2].weather[0].icon
img4.classList.remove("hidden")

temp5.textContent = `Temp ${data2.daily[3].temp.day}`
   wind5.textContent = `Wind ${data2.daily[3].wind_speed} MPH`
   humid5.textContent = `Humidity ${data2.daily[3].humidity}`
   uv5.textContent = `Uv ${data2.daily[3].uvi}`
   img5.src = data2.daily[3].weather[0].icon
img5.classList.remove("hidden")

temp6.textContent = `Temp ${data2.daily[4].temp.day}`
   wind6.textContent = `Wind ${data2.daily[4].wind_speed} MPH`
   humid6.textContent = `Humidity ${data2.daily[4].humidity}`
   uv6.textContent = `Uv ${data2.daily[4].uvi}`
   img6.src = data2.daily[4].weather[0].icon
img6.classList.remove("hidden")


})

temp1.textContent = `Temp ${data.current.temp_f}`
wind1.textContent = `Wind ${data.current.wind_mph} MPH`
humid1.textContent = `Humidity ${data.current.humidity}`
uv1.textContent = `Uv ${data.current.uv}`
img1.src = data.current.condition.icon
img1.classList.remove("hidden")
console.log(data.forecast.forecastday[0].date)
currentDate.textContent = data.forecast.forecastday[0].date
})

} )
})

})

if (storeAge) {

   let storageDisplay = document.createElement("button")
   storageDisplay.textContent = storeAge
   cityDiv.append(storageDisplay)
 storageDisplay.addEventListener("click", () => {

      
   
   
   
   
   
   
   
   let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${storeAge}&days=6&aqi=no&alerts=no`
 


   fetch(api)
   .then(response => response.json())
.then((data) => {
console.log(data)
city.textContent = data.location.name

let lon = data.location.lon
let lat = data.location.lat
let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=0fbaf1cc084855e3c67d7756d3d6a0f6`
fetch(api2)
.then(response => response.json())
.then((data2)=>{
   console.log(data2)
   
   temp2.textContent = `Temp ${data2.daily[0].temp.day}`
   wind2.textContent = `Wind ${data2.daily[0].wind_speed} MPH`
   humid2.textContent = `Humidity ${data2.daily[0].humidity}`
   uv2.textContent = `Uv ${data2.daily[0].uvi}`
   img2.src = data2.daily[0].weather[0].icon
img2.classList.remove("hidden")

temp3.textContent = `Temp ${data2.daily[1].temp.day}`
   wind3.textContent = `Wind ${data2.daily[1].wind_speed} MPH`
   humid3.textContent = `Humidity ${data2.daily[1].humidity}`
   uv3.textContent = `Uv ${data2.daily[1].uvi}`
   img3.src = data2.daily[1].weather[0].icon
img3.classList.remove("hidden")

temp4.textContent = `Temp ${data2.daily[2].temp.day}`
   wind4.textContent = `Wind ${data2.daily[2].wind_speed} MPH`
   humid4.textContent = `Humidity ${data2.daily[2].humidity}`
   uv4.textContent = `Uv ${data2.daily[2].uvi}`
   img4.src = data2.daily[2].weather[0].icon
img4.classList.remove("hidden")

temp5.textContent = `Temp ${data2.daily[3].temp.day}`
   wind5.textContent = `Wind ${data2.daily[3].wind_speed} MPH`
   humid5.textContent = `Humidity ${data2.daily[3].humidity}`
   uv5.textContent = `Uv ${data2.daily[3].uvi}`
   img5.src = data2.daily[3].weather[0].icon
img5.classList.remove("hidden")

temp6.textContent = `Temp ${data2.daily[4].temp.day}`
   wind6.textContent = `Wind ${data2.daily[4].wind_speed} MPH`
   humid6.textContent = `Humidity ${data2.daily[4].humidity}`
   uv6.textContent = `Uv ${data2.daily[4].uvi}`
   img6.src = data2.daily[4].weather[0].icon
img6.classList.remove("hidden")


})

temp1.textContent = `Temp ${data.current.temp_f}`
wind1.textContent = `Wind ${data.current.wind_mph} MPH`
humid1.textContent = `Humidity ${data.current.humidity}`
uv1.textContent = `Uv ${data.current.uv}`
img1.src = data.current.condition.icon
img1.classList.remove("hidden")
console.log(data.forecast.forecastday[0].date)
currentDate.textContent = data.forecast.forecastday[0].date
})



   } )


}
else {
   storeAge = false
} 

