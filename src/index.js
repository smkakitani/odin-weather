// css
import './style/main.css';

// JS
// import {  } from './js/main.js';
import { getWeatherData, CityData } from './js/api';

console.log('hello world!');
// console.log(getCurrentWeather("londrina"));


// showing api's data!!
const show = async(city) => {
  const weather = await getWeatherData(city);
  const myCity = CityData(weather.location.name);
  myCity.country = weather.location.country;
  myCity.current.tempC = weather.current.temp_c;

  // const mylocal = `my local is ${local} and it's ${weather} feels ${feels}`;

  console.log(myCity);
  // return message;

  // const forecast = await getForecast("maringa");
  
}

show("maringa");

// const maringa = CityData("maringa");
// console.log(maringa);