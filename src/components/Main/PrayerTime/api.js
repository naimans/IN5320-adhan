export async function getTimeSchedule() {
  const URL = "http://api.aladhan.com/v1/timingsByCity?city=Oslo&country=Norway&method=3";
  const response = await fetch(`${URL}`);
  const result = await response.json();
  //console.log(result);
  return result;
}
