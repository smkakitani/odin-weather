// Fetching Weather API
/* async function getCurrentWeather(myLocation) {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=5f85af9fc3c745fbb11221400231104&q=' + myLocation + '&aqi=no', {mode: 'cors'});
    const cityData = await response.json();

    console.log(cityData);
    return cityData;
  } catch (err) {
    console.log("ops" + err);
  }
  
} */


// forecast return current weather and forecast
async function getForecast(myLocation) {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=5f85af9fc3c745fbb11221400231104&q=' + myLocation + '&days=3&aqi=no&alerts=no', {mode: 'cors'});
    const myCity = await response.json();

    console.log(myCity);
    return myCity;
  } catch (err) {
    console.log(err + "forecast");
  }
}

export { /* getCurrentWeather, */ getForecast };