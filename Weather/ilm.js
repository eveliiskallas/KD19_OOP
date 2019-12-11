class Weather{
    // konstruktor 
    constructor(c){
        this.city = c;
        this.key = '730be19993d9d96dbb348d1229bbd78e';
    }

    // data from API 
     async weatherData(){
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key);  
        const data = await resp.json();
        console.log(data);
        return data;
    }


    // change city name 
} 