// SÜNDMUSED

const kustutaKoik = document.querySelector('.clear-tasks');

kustutaKoik.addEventListener('click', vajutaNupp);

function vajutaNupp(e){
    let sisu = e;
    // Target
    sisu = e.target;
    sisu = e.target.id;
    sisu = e.target.className;
    sisu = e.target.classList;

    // Tüüp 
    sisu = e.type;

    // Sündmuse koordinaadid browseri akna suhtes
    sisu = e.clientY;
    sisu = e.clientX;

    // Sündmuse koordinaadid elemendi enda suhtes
    sisu = e.offsetY;
    sisu = e.offsetX;
    console.log(sisu);
}
