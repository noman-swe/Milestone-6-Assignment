const apiKey = `def41e2a02f862100531f8648775e26f`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
};

const displayTemperature = temperature => {
    console.log(temperature);
    console.log(temperature.name);
}