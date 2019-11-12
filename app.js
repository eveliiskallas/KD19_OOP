// DOCUMENT METHODS - DOKUMENDI MEETODID
// MULTIPLY ELEMENT SELECTOR - MITME ELEMENTI SELEKTOR

let sisu = document.getElementsByClassName('collection-item');
// klassi nime järgi 
console.log(sisu);
console.log(sisu[0]);
sisu[0].style.color = 'orange'
sisu[2].textContent = 'Õpi Arvutivõrgud'

// querySelector + klassi järgi
let nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

// nimekirja nime järgi 
nimekirjaElemendid = document.getElementsByTagName('li');

// teisendame HTMLCollection massiiviks (array)
nimekirjaElemendid = Array.from(nimekirjaElemendid);

// massiivi meetodite kasutamine
nimekirjaElemendid.reverse();

// MASSIIVI LÄBIOMINE TSÜKLIS

// for
for(let i = 0; i < nimekirjaElemendid.length; i++){
    // console.log(nimekirjaElemendid[i].className);
    nimekirjaElemendid[i].style.background = '#ddd'
    nimekirjaElemendid[1].style.background = '#f4f4f4'
}
// forEach
// nimekirjaElemendid.forEach(function(element) {
//     console.log(element);
//     element.style.background = '#ddd';
// });

let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
console.log(nimekiriPaaritu);

let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)');
console.log(nimekiriPaaris);