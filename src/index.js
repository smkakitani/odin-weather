// css
import './style/main.css';

// JS
// import {  } from './js/main.js';
import { getWeatherData, CityData } from './js/api';

console.log('hello world!');
// console.log(getCurrentWeather("londrina"));


// showing api's data!!
const show = async(userCity) => {
  const localName = await getWeatherData(userCity);


  // const mylocal = `my local is ${local} and it's ${weather} feels ${feels}`;

  console.log(localName);
}

show("sao paulo");