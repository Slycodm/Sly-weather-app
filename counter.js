let input = document.getElementById('input');
let searchBtn = document.getElementById('searchBtn');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let feels = document.getElementById('feels');
let visibility = document.getElementById('visibility');
let pressure = document.getElementById('pressure');
let uvIndex = document.getElementById('uvIndex');

let myRequest = new XMLHttpRequest();

searchBtn.addEventListener('click', function () {

  myRequest.open('GET', `https://api.weatherapi.com/v1/current.json?key=5b0c41d5b0524d48b3d80130240409&q=${input.value}&aqi=no`)

  myRequest.onload = function (){

    console.log(myRequest.responseText);

    let myData = myRequest.responseText;


    let newData = JSON.parse(myData)

    console.log(newData);

    city.innerHTML = newData.location.region;
    temp.innerHTML = newData.current.temp_c + '°C'
    humidity.innerHTML = newData.current.humidity + '%';
    visibility.innerHTML = newData.current.vis_km + 'km';
    wind.innerHTML = newData.current.wind_mph + 'km/ph';
    feels.innerHTML = newData.current.feelslike_c + '°';
    pressure.innerHTML = newData.current.pressure_mb + 'hPa';
    uvIndex.innerHTML = newData.current.uv + 'mw';
    

  }
   myRequest.send();

});

