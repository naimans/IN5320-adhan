const latitude=59.9541049;
const longitude=10.729883;
const BASE_URL = 'https://api.sunrise-sunset.org/json?lat='+latitude+'&lng='+longitude+'&date=today';
//const BASE_URL = 'https://api.sunrise-sunset.org/json?lat='+latitude+'&lng='+longitude+'&callback=mycallback';
//const BASE_URL = 'https://fcc-weather-api.glitch.me/api/current?lat='+latitude+'&lon='+longitude;

//const waitABit = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

export async function getSunTime() {
  //await waitABit(1000);
  const response = await fetch(`${BASE_URL}`);
  const result = await response.json();
  //console.log(result);
  return result;
}
