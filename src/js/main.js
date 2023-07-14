// Fetching Weather API
async function getCurrentWeather(myLocation) {
  try {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=5f85af9fc3c745fbb11221400231104&q=' + myLocation + '&aqi=no', {mode: 'cors'});
    const cityData = await response.json();

    console.log(cityData);
    return cityData;
  } catch (err) {
    console.log("ops" + err);
  }
  
}

export { getCurrentWeather };