let weather = {
    apiKey: "ecfb152ebdd75fb617dab67767d7f6d1",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed:" + speed + "Km/h";
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".searchbutton").addEventListener("click", function () {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key=="Enter"){
        weather.search();
    }
})