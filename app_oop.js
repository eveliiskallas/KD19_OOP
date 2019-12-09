// app_oop.js

// Raamat

class Raamat {
    constructor (a, p, i){
        this.autor = a;
        this.pealkiri = p;
        this.isbn = i;
    }
}

// KasutajaLiides

class KL {
    // puhastaSisend 
    puhastaSisend(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    // lisaRaamatTabelisse
    lisaRaamatTabelisse (r){
        const rida = document.createElement('tr');
        // täidame rea tabeli andmetega 
        rida.innerHTML = `
            <td>${r.pealkiri}</td>
            <td>${r.autor}</td>
            <td>${r.isbn}</td>
            <td><a href="#" class="kustuta">X</a></td>
            
        `;

        // lisame rea tabeli sisse <td><a href="#"><i class="fas fa-times kustuta"></i></a></td>
        const tabel = document.getElementById('book-list');
        tabel.appendChild(rida);
    }

    // teade 
    teade(s, stiil){
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

    // kustutaRaamatTabelist 
    kustutaRaamatTabelist(kustutaElement){
        if(kustutaElement.className === 'kustuta'){
            tabeliRida = kustutaElement.parentElement.parentElement;
            tabeliRida.remove();
            return true;
        }
    }
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
e.preventDefault();
