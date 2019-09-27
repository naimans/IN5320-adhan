/*const API_KEY='d11c31b7171e81fc6ae9b4622a651906';
const BASE_URL = 'https://muslimsalat.com/';
const C_NAME = 'norway';
const URL = BASE_URL+C_NAME+'.json?key='+API_KEY;*/

//const waitABit = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

export async function getTimeSchedule() {
  const URL = "http://api.aladhan.com/v1/timingsByCity?city=Oslo&country=Norway&method=3";
  const response = await fetch(`${URL}`);
  const result = await response.json();
  //console.log(result);
  return result;
}
