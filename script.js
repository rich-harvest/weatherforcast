const apiKey="208f905fee85088f30fe8ada830c5e1c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const waetherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
  const response = await fetch(apiUrl + city+ `&appid=${apiKey}`) ;
  var data = await response.json();
  console.log(data);
  document.querySelector(".city h2").innerHTML=data.name;

  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  document.querySelector(".time").textContent = currentTime;

  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"℃";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
  if(data.weather[0].main=="Haze"){
    waetherIcon.src="images/Haze.png";
  }
  else if(data.weather[0].main=="Clouds"){
    waetherIcon.src="images/clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    waetherIcon.src="images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    waetherIcon.src="images/rain.png";
  }  
  else if(data.weather[0].main=="Drizzle"){
    waetherIcon.src="images/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    waetherIcon.src="images/mist.png";
  }
  else if(data.weather[0].main=="Snow"){
    waetherIcon.src="images/snow.png";
  }

  document.querySelector(".weather").style.display ="block";
  document.querySelector(".table").style.display ="block";
  document.querySelector(".sunrise").style.display ="block";
}

searchBtn.addEventListener("click", ()=>{

  checkWeather(searchBox.value);
})


