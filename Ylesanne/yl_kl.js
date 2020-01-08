class KL {
    puhastaSisend(){
        document.getElementById('task').value = '';
    }

    // lisaRaamatTabelisse
    lisaYlesanneTabelisse (r){
        const rida = document.createElement('li');
        // täidame rea tabeli andmetega 
        rida.innerHTML = `
            ${r.ylesanne}<a href="#" class="kustuta">X</a>
            
        `;

        // lisame rea tabeli sisse <td><a href="#"><i class="fas fa-times kustuta"></i></a></td>
        const list = document.getElementById('collection');
        list.appendChild(rida);
    }

    naitaYlesannet(){
        // vaatame, millised raamatud on olemas 
        const ls = new LS()

        const ylesanded = ls.loeYlesannet();
        ylesanded.forEach(function(sisend){
            // loeme andmed local storagest ühekaupa ja teisendame Raamat objektiks 
            const r = new Ylesanne(sisend['ylesanne']);
            // loome kl objekti väljastamiseks 
            const kl = new KL();
            // väljastame tabeli rida
            kl.lisaYlesanneTabelisse(r);
        });
    }
}