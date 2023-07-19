// API request data
async function getWeatherData(cityName) {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=5f85af9fc3c745fbb11221400231104&q=' + cityName + '&days=3&aqi=no&alerts=no', {mode: 'cors'});
    const myCity = await response.json();

    console.log(myCity);
    return myCity;
  } catch (err) {
    console.log(err + " oops!");
  }
}

const CityData = (currentCity) => {
  const current = {
    tempC: '',
    tempF: '',
    feelsLikeC: '',      
    feelsLikeF: '',
  };

  return {
    name: currentCity,
    country: '',
    current,
  }
};






export { getWeatherData, CityData };