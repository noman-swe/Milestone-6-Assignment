const apiKey = `def41e2a02f862100531f8648775e26f`;

document.getElementById('city-name').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        searchTemperature();
    }
});

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    console.log(temperature.name);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');

    imageIcon.setAttribute('src', url);
}