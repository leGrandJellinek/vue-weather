import axios from "axios"

async function  getWeather(appId,cityName) {
    try {
        const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${appId}`);
        const city = result.data[0]
        let {lat, lon, name: name} = city;
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&units=metric&lang=ru&appid=${appId}`)
        console.log(data);
        return {...data, name}
    } catch (error) {
        console.error(error);
    }
}

export {getWeather} 

//Для будущего переиспользования 