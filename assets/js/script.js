const searchBtn = document.querySelector(".searchButton");
const input = document.querySelector("input")
let city = document.querySelector(".displayCity")
let temp1 = document.querySelector(".temp1")
let wind1 = document.querySelector(".wind1")
let humid1 = document.querySelector(".humid1")
let uv1 = document.querySelector(".uv1")
let img1 = document.querySelector("#img1")
let currentDate = document.querySelector(".currentDate")
let cityDiv = document.querySelector(".citySearch")
document.body.header

searchBtn.addEventListener("click", ()=> {
   let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${input.value}&days=6&aqi=no&alerts=no`
 
let createBtn = document.createElement("button")

   fetch(api)
   .then(response => response.json())
.then((data) => {
console.log(data)

city.textContent = data.location.name
temp1.textContent = `Temp ${data.current.temp_f}`
wind1.textContent = `Wind ${data.current.wind_mph} MPH`
humid1.textContent = `Humidity ${data.current.humidity}`
uv1.textContent = `Uv ${data.current.uv}`
img1.src = data.current.condition.icon
img1.classList.remove("hidden")
console.log(data.forecast.forecastday[0].date)
currentDate.textContent = data.forecast.forecastday[0].date
createBtn.textContent = input.value



cityDiv.append(createBtn)
})




})

