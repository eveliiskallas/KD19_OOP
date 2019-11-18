// DOCUMENT METHODS - DOKUMENDI MEETODID
// ELEMENTIDE KUSTUTAMINE 

// Leian antud DOM'is kõik Listi elemendid
const liElemendid = document.querySelectorAll('li');

// Kustuta konkreetne element 
liElemendid[2].remove();

// Leia antud DOM'is ul element 
const ulElement = document.querySelector('ul');

// kustuta antud elemendist li 
//li on ul lapsed 
ulElement.removeChild(liElemendid[1]);

// KLASSI JA ATRIBUUDI KUSTUTAMINE

// nimekirja element
const liElement = liElemendid[0]; 
// kustutamislink
const link = liElement.children[0];

// Klass
let sisu = link.className;
sisu = link.classList;
sisu = link.classList[1]; //kustutas kindla klassi nime 
link.classList.remove('secondary-content');
sisu = link;

// Atribuut 
sisu = link.getAttribute('href');
link.setAttribute('href', 'https://google.com')
link.setAttribute('title', 'Google')
link.removeAttribute('title');
sisu = link;

console.log(sisu);
