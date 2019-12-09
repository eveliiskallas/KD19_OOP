// app_oop.js

// Kirjeldame raamatu lisamise sündmuse 
document.getElementById('book-form').addEventListener('submit', lisaRaamat);

// Raamatu lisamise funktsioon   
function lisaRaamat(e){        
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // loome raamatud andmete põhjal 
    const raamat = new Raamat(pealkiri, autor, isbn);

    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();

    // kui mingid andmed on puudu, siis anname märku 
    if(pealkiri == '' | autor == '' | isbn == ''){
        kl.teade('Andmed on puudu. Tuleb täita kõik väljad', 'invalid');
    } else {
        // muidu lisame sisestatud raamatu tabelisse 
        // lisame sisestatud raamatu tabelisse 
        kl.lisaRaamatTabelisse(raamat);
        // loome LS objekti funktsiooni kutsumiseks 
        // const ls = new LS();
        // lisame raamatu andmed  local storage'sse
        // ls.salvestaRaamat(raamat);
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
    // const ls = new LS()
    // onKustutatud = ls.kustutaRaamatLS(isbn);
    // väljastame vastava teate 
    // if(onKustutatud){
    kl.teade('Raamat on kustutatud', 'valid');
    // }
    e.preventDefault();
}

