// API request data
async function getWeatherData(cityName) {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=5f85af9fc3c745fbb11221400231104&q=' + cityName + '&days=3&aqi=no&alerts=no', {mode: 'cors'});
    const myCity = await response.json();

    console.log(myCity);
    const dataStored = CityData(myCity);
    return dataStored;
  } catch (err) {
    console.log(err + " oops!");
  }
}


// to store only the required data for the project
const CityData = (weatherData) => {
  const current = weatherData.current;
  const today = weatherData.forecast.forecastday[0];
  const nextDay = weatherData.forecast.forecastday[1];
  const afterNextDay = weatherData.forecast.forecastday[2];

  const forecast = {
    today,
    nextDay,
    afterNextDay,     
  };

  return {
    name: weatherData.location.name,
    country: weatherData.location.country,
    current,
    forecast,
  }
}


export { getWeatherData/* , CityData */ };