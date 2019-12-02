// RAAMATU KONSTRUKTOR 

function Raamat(p, a, i){
    this.pealkiri = p;
    this.autor = a;
    this.isbn = i;
}

// Kasutajaliides - KL 
//konstruktor 
function KL(){

}

// KL funktsionaal
// sisendväljade puhastamine 
KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// raamatu lisamine tabelisse 
KL.prototype.lisaRaamatTabelisse = function(r){
    // loome tabeli rea 
    const rida = document.createElement('tr');
    // täidame rea tabeli andmetega 
    rida.innerHTML = `
        <td>${r.pealkiri}</td>
        <td>${r.autor}</td>
        <td>${r.isbn}</td>
    `
    // lisame rea tabeli sisse 
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

// teade väljastamine 
KL.prototype.teade = function(s, stiil){
    // loome div, kuhu lisada teate sõnum 
    const div = document.createElement('div');
    div.className = `alert ${stiil}`;
    // lisame sõnumi teksti 
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    // leiame elemendid, mille suhtes tuleb lisada uus element 
    const konteiner = document.querySelector('.container');
    const vorm = document.getElementById('book-form');
    // lisame teate dokumenti 
    konteiner.insertBefore(div, vorm);

    // Kustutame teate pärast 5 sekundit
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 5000)

}

// Kirjeldame raamatu lisamise sündmuse 

document.getElementById('book-form').addEventListener('submit', lisaRaamat);

// Raamatu lisamise funktsioon 

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // loome raamatud andmete põhjal 
    const raamat = new Raamat(pealkiri, autor, isbn);

    // console.log(raamat);

    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();

    // kui mingid andmed on puudu, siis anname märku 
    if(pealkiri == '' | autor == '' | isbn == ''){
        kl.teade('Andmed on puudu. Tuleb täita kõik väljad', 'invalid');
    } else {
        // muidu lisame sisestatud raamatu tabelisse 
        // lisame sisestatud raamatu tabelisse 
        kl.lisaRaamatTabelisse(raamat);
        kl.teade('Raamat on lisatud tabelisse', 'valid');

        
    };


    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

    e.preventDefault();
}