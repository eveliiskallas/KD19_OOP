// SÜNDMUSED

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const pealkiri = document.querySelector('h5');

// kustutame lisaUusYlesanne väärtus 
lisaUusYlesanne.value = '';

// vormi saatmine 
form.addEventListener('submit', syndmus);

function syndmus(e){
  // logi sündmuse tüüp 
  console.log(`Sündmuse tüüp: ${e.type}`);

  // kontrollime vormi kaudu saadetud väärtust 
  console.log(lisaUusYlesanne.value);

  // väljastame ülesanne HTML-is 
  pealkiri.innerText = lisaUusYlesanne.value;

}
