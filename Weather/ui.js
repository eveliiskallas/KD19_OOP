class UI {
    // constructor 
    constructor(){
        this.cityName = document.getElementById('w-city');
        this.temp = document.getElementById('w-temp');
        this.humidity = document.getElementById('w-humidity');
        this.desc = document.getElementById('w-desc');
    }

    print(cityWeather){
        this.cityName.textContent = cityWeather.name;
        const celsius = Math.round(parseFloat(cityWeather.main.temp)-273.15);
        const humidity = 
        this.temp.innerHTML = `${celsius} &deg;C `;
        this.humidity.innerHTML = `${cityWeather.main.humidity} % `;
        this.desc.textContent = cityWeather.weather[0].description;
    }
}