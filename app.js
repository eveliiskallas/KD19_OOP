// SÜNDMUSED

const kustutaKoik = document.querySelector('.clear-tasks');

const pealkiri = document.querySelector('h5');

const kaart = document.querySelector('.card');

// click
// kustutaKoik.addEventListener('click', syndmus);

// double click
// kustutaKoik.addEventListener('dblclick', syndmus);

// mouse down
// kustutaKoik.addEventListener('mousedown', syndmus);

// mouse up
// kustutaKoik.addEventListener('mouseup', syndmus);

// mouse enter
// kaart.addEventListener('mouseenter', syndmus);

// mouse leave
// kaart.addEventListener('mouseleave', syndmus);

// mouse over / out 
// kaart.addEventListener('mouseover', syndmus);

// mouse move
// kaart.addEventListener('mousemove', syndmus);


function syndmus(e){
  // logi sündmuse tüüp 
  console.log(`Sündmuse tüüp: ${e.type}`);
  // muuda teksti sisu: HiirX: x koord Hiir Y: y koord
  pealkiri.textContent = `HiirX: ${e.offsetX} HiirY: ${e.offsetY} `;
  // koosta body värv rgb(Xkoord, Ykoord, 40);
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
