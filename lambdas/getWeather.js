const Responses = require('./API_Responses')


exports.handler = async event => {
    if (!event.pathParameters || !event.pathParameters.name) {
        return Responses._400({message: 'Missing name from the path'})
    }
    let name = event.pathParameters.name; 
    if (data[name]) {
        return Responses._200(data[name])
    }

    return Responses._400({message: `Incorrect city named ${name}`})

}

const data = {

    London: {
            "coord": {
                "lon": -0.13,
                "lat": 51.51
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 284.55,
                "feels_like": 283.36,
                "temp_min": 283.71,
                "temp_max": 284.82,
                "pressure": 1013,
                "humidity": 87
            },
            "visibility": 10000,
            "wind": {
                "speed": 1.5,
                "deg": 0
            },
            "clouds": {
                "all": 90
            },
            "dt": 1608637197,
            "sys": {
                "type": 1,
                "id": 1414,
                "country": "GB",
                "sunrise": 1608624271,
                "sunset": 1608652437
            },
            "timezone": 0,
            "id": 2643743,
            "name": "London",
            "cod": 200
    },
    Madrid: {
            "coord": {
                "lon": -3.7,
                "lat": 40.42
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",
                    "icon": "50d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 283.24,
                "feels_like": 282.43,
                "temp_min": 281.15,
                "temp_max": 284.82,
                "pressure": 1027,
                "humidity": 87
            },
            "visibility": 3500,
            "wind": {
                "speed": 0.5,
                "deg": 0
            },
            "clouds": {
                "all": 75
            },
            "dt": 1608647702,
            "sys": {
                "type": 1,
                "id": 6443,
                "country": "ES",
                "sunrise": 1608622506,
                "sunset": 1608655917
            },
            "timezone": 3600,
            "id": 3117735,
            "name": "Madrid",
            "cod": 200
    } 
}

// const renderWeather = (item) => {
//     let temperature = Math.floor(item.main.temp - 273.15)
//     let feelsLike = Math.floor(item.main.feels_like - 273.15)
//     return `<h1>The weather in ${item.name}, ${item.sys.country}</h1>
//     <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
//     <h2>Conditions: ${item.weather[0].description}</h2>
//     <h2>Temperature: ${temperature}&deg</h2>
//     <h2>Feels like: ${feelsLike}&deg</h2>
//     <h2>Wind speed: ${item.wind.speed}mph</h2>`
//   }

//   weather: Array(1)
// 0:
// description: "overcast clouds"


// {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
// base: "stations"
// clouds: {all: 90}
// cod: 200
// coord: {lon: -0.13, lat: 51.51}
// dt: 1608636721
// id: 2643743
// main: {temp: 284.37, feels_like: 283.14, temp_min: 283.71, temp_max: 284.82, pressure: 1013, …}
// name: "London"
// sys: {type: 1, id: 1414, country: "GB", sunrise: 1608624271, sunset: 1608652437}
// timezone: 0
// visibility: 10000
// weather: [{…}]
// wind: {speed: 1.5, deg: 0}
// __proto__: Object

