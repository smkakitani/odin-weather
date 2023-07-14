// css
import './style/main.css';

// JS
import { getCurrentWeather } from './js/main.js';

console.log('hello world!');
// console.log(getCurrentWeather("londrina"));

const show = async() => {
  const message = await getCurrentWeather('londrina');
  const local = message.location.name;
  const weather = message.current.condition.text;
  const feels = message.current.feelslike_c;

  const mylocal = `my local is ${local} and it's ${weather} feels ${feels}`;

  console.log(mylocal);
  // return message;
}

show();