function acceptCookies() {
    var cookie = document.querySelector('.cookie');
    cookie.remove();
}

var city = '';
function selectCity(el) {
    var value = el.innerText;
    city = value;
    alert("Loading weather report for: " + value + "...");
    // console.log(city);
}


function changeUnit() {
    var tempmax = document.querySelectorAll('.max span');
    var tempmin = document.querySelectorAll('.min span');

    var swicher = document.querySelector('#temperature').value;

    for (let i = 0; i < tempmax.length; i++) {
        var valuemax = Number(tempmax[i].innerText);
        var valuemin = Number(tempmin[i].innerText);

        if (swicher === 'farenheit') {
            tempmax[i].innerText = Math.floor((valuemax * 9 / 5) + 32);
            tempmin[i].innerText = Math.floor((valuemin * 9 / 5) + 32);
        } else {
            tempmax[i].innerText = Math.floor((valuemax - 32) * 5 / 9);
            tempmin[i].innerText = Math.floor((valuemin - 32) * 5 / 9);
        }
    }
}

var API = 'dfb3fc433c68ab13e8e82397e651d966';

async function getWeatherData() {
    var cityname = document.querySelector('header h2');
    var weatherPrediction= document.querySelector('.weather p');
    var displayMax = document.querySelector('.max span');
    var displayMin = document.querySelector('.min span');
    var img = document.querySelector('.weather > img');
    var request = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API);
    var weatherData = await request.json();

    cityname.innerText= city;
    weatherPrediction.innerText = weatherData.weather[0].description
    displayMax.innerText = weatherData.main.temp_max;
    displayMin.innerText = weatherData.main.temp_min;

    if (weatherData.weather[0].description =="haze") {
        img.src = './assets/some_sun.png';
        
    } else {
        img.scr = './assets/some_rain.png';
    }

    // console.log(weatherData.data);

}
