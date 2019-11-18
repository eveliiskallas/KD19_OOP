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

console.log(ulElement);
