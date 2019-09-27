//const URL_Arabic = 'https://api.alquran.cloud/ayah/'+AYAH;

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

/*export async function getAyatArabic(id) {
  await waitABit(1000);
  const response = await fetch(`${URL_Arabic}`);
  const data = await response.json();
  return data;
}*/
