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
        <td><a href="#" class="kustuta">X</a></td>
        
    `;
    // lisame rea tabeli sisse <td><a href="#"><i class="fas fa-times kustuta"></i></a></td>
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

// raamatu kustutamine tabelist 
KL.prototype.kustutaRaamatTabelist = function(kustutaElement){
    if(kustutaElement.className === 'kustuta'){
        tabeliRida = kustutaElement.parentElement.parentElement;
        tabeliRida.remove();
        return true;
    }
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
    }, 2000)

}

// raamatute lugemine local storagest 
KL.prototype.loeRaamatud = function(){
    let raamatud;
    // kui raamatuid veel local storages ei eksisteeri
    if(localStorage.getItem('raamatud') === null){
        raamatud = [];
    } else {
        // kui on, siis need tuleb kätte saada 
        raamatud = JSON.parse(localStorage.getItem('raamatud'));
    }
    return raamatud;
}

// raamatu salvestamine 
KL.prototype.salvestaRaamat = function(r){
    // loome raamatute hoidla local storages 

    // tekitame raamatute massiivi
    raamatud = this.loeRaamatud();
    // lükkame uue raamatu andmed massiivi 
    raamatud.push(r);
    // lisame andmed local storagesse
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    console.log(raamatud);
}

// salvestatud raamatute näitamine 
KL.prototype.naitaRaamatut = function(){
    // vaatame, millised raamatud on olemas 
    const raamatud = this.loeRaamatud();
    raamatud.forEach(function(raamat){
        // loeme andmed local storagest ühekaupa ja teisendame Raamat objektiks 
        const r = new Raamat(raamat['autor'], raamat['pealkiri'], raamat['isbn']);
        // loome kl objekti väljastamiseks 
        const kl = new KL();
        // väljastame tabeli rida
        kl.lisaRaamatTabelisse(r);
    });
}

KL.prototype.kustutaRaamatLS = function(isbn){
    // vaatame, millised raamatud on olemas
    const raamatud = this.loeRaamatud();
    raamatud.forEach(function(raamat, index){
        // loeme andmed local storagest ühekaupa ja võrdleme 
        if(raamat.isbn === isbn){
            raamatud.splice(index, 1);
        }
    });
    // lisame andmed local storagesse 
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    // kinnitan kustutamist teate väljastamiseks 
    return true;

    
}

// kirjeldame andmete lugemise sündmust local storagest 
document.addEventListener('DOMContentLoaded', raamatuteTabel);

// raamatute tabeli funktsoon
function raamatuteTabel(e){
    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();
    // kutsume raamatute näitamise funktsiooni
    kl.naitaRaamatut();
};

//



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

        // lisame raamatu andmed  local storage'sse
        kl.salvestaRaamat(raamat);

        kl.teade('Raamat on lisatud tabelisse', 'valid');

        
    };


    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

}

// Raamatu kustutamise sündmus 

document.getElementById('book-list').addEventListener('click', kustutaRaamat);
function kustutaRaamat(e){
    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();


    // kutsutakse tabelist oleva raamatu kustutamise funktsiooni 
    // loome X link, millele clickime, et kustutada 
    const X = e.target; 
    // saame kustutava raamatu isbn kätte 
    isbn = X.parentElement.previousElementSibling.textContent;
    console.log(isbn);
    // kustutame andmed tabeli väljundist 
    kl.kustutaRaamatTabelist(X);
    // kustutame andmed local storagest 
    onKustutatud = kl.kustutaRaamatLS(isbn);

    // väljastame vastava teate 
    if(onKustutatud){
    kl.teade('Raamat on kustutatud', 'valid');

    }
    e.preventDefault();

}