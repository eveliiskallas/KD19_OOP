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
            const tabeliRida = kustutaElement.parentElement.parentElement;
            tabeliRida.remove();
            return true;
        }
    }

    naitaRaamatud(){
        // vaatame, millised raamatud on olemas 
        const ls = new LS()

        const raamatud = ls.loeRaamatud();
        raamatud.forEach(function(raamat){
            // loeme andmed local storagest ühekaupa ja teisendame Raamat objektiks 
            const r = new Raamat(raamat['autor'], raamat['pealkiri'], raamat['isbn']);
            // loome kl objekti väljastamiseks 
            const kl = new KL();
            // väljastame tabeli rida
            kl.lisaRaamatTabelisse(r);
        });
    }
}
