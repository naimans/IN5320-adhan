const latitude=59.9541049;
const longitude=10.729883;
const BASE_URL = 'https://api.sunrise-sunset.org/json?lat='+latitude+'&lng='+longitude+'&date=today';

export async function getSunTime() {
  const response = await fetch(`${BASE_URL}`);
  const result = await response.json();
  //console.log(result);
  return result;
}
