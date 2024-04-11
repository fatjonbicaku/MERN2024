function acceptCookies() {
    var cookie = document.querySelector('.cookie');
    cookie.remove();
}

function selectCity(el) {
    var value = el.innerText;
    alert("Loading weather report for: " + value + "...");
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
    var request = await fetch('https://api.openweathermap.org/data/2.5/weather?q=tirana&appid=' + API);
    var weatherData = await request.json();
    // console.log(weatherData.data);

}

getWeatherData();