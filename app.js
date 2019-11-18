// DOCUMENT METHODS - DOKUMENDI MEETODID
// ELEMENTIDE ASENDAMINE 

// Elemendi leidmine (h5)
const vanaPealkiri = document.querySelector('h5');

// Leiame elemendi divi

const pealkirjaDiv = document.querySelector('div.card-action');

// Loo uus pealkiri 
const uusPealkiri = document.createElement('h3');

// lisa id 
uusPealkiri.id = 'new-title';

// lisa sisu 
uusPealkiri.textContent = 'Uued Ülesanded';
// uusPealkiri.appendChild(document.createTextNode('Uued ülesanded'));

// Aenda vana pealkiri uuega 
pealkirjaDiv.replaceChild( uusPealkiri, vanaPealkiri);

////////

const ylesanded = document.querySelector('span#title');
const ylDiv = document.querySelector('div.card-content');
const uusYlesanne = document.createElement('h3');
uusYlesanne.id = 'new-yl-title';
uusYlesanne.textContent = 'Sinu Ülesanded';
ylDiv.replaceChild(uusYlesanne, ylesanded);

console.log(ylesanded);
