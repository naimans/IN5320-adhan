const waitABit = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

export async function getAyat() {
  let AYAH = Math.floor(Math.random() * 6236) + 1;
  const URL = 'https://api.alquran.cloud/ayah/'+AYAH+'/en.asad';
  await waitABit(1000);
  const response = await fetch(`${URL}`);
  const result = await response.json();
  //console.log(result);
  return result;
}
