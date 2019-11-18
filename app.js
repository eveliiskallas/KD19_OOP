// DOCUMENT METHODS - DOKUMENDI MEETODID
// ELEMENTIDE LOOMINE 

// Loo Element
const liElement = document.createElement('li');

// Lisa Klass
liElement.className = 'collection-item';

// Lisa ID
liElement.id = 'new-item';

// Lisa Atribuut
liElement.setAttribute('title', 'Uus Element');

// Lisa Teksti väljund 
// liElement.innerHTML = 'Uus element';
liElement.textContent = 'Uus element';

// Loo Lingi Element 
const link = document.createElement('a');

// Lisa Lingi Klassid
link.className = 'delete-item secondary-content';

// Lisame Kustutamisikooni
link.innerHTML = '<i class="fa fa-remove"></i>'

// Lisa Link Listi Elemendi sisse 
liElement.appendChild(link);

// Lisa List Nimekirja sisse 
ulElement = document.querySelector('ul.collection');
ulElement.appendChild(liElement);

console.log(liElement);


// console.log(link);
