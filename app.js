// SÜNDMUSED

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const pealkiri = document.querySelector('h5');

// kustutame lisaUusYlesanne väärtus 
lisaUusYlesanne.value = '';

// klaviatuur 

// keydown 
// lisaUusYlesanne.addEventListener('keydown', syndmus);

// keyup 
// lisaUusYlesanne.addEventListener('keyup', syndmus);

// keypress 
// lisaUusYlesanne.addEventListener('keypress', syndmus);

// focus  
// lisaUusYlesanne.addEventListener('focus', syndmus);

// blur  
// lisaUusYlesanne.addEventListener('blur', syndmus);

// paste  
// lisaUusYlesanne.addEventListener('paste', syndmus);

// cut  
// lisaUusYlesanne.addEventListener('cut', syndmus);

// input  
// lisaUusYlesanne.addEventListener('input', syndmus);

// input  
// lisaUusYlesanne.addEventListener('input', syndmus);



// vormi saatmine 
// form.addEventListener('submit', syndmus);

function syndmus(e){
  // logi sündmuse tüüp 
  console.log(`Sündmuse tüüp: ${e.type}`);

  // kontrollime vormi kaudu saadetud väärtust 
  console.log(lisaUusYlesanne.value);

  // väljastame ülesanne HTML-is 
  pealkiri.innerText = lisaUusYlesanne.value;

}