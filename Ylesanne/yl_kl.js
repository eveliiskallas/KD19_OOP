class KL {
    puhastaSisend(){
        document.getElementById('task').value = '';
    }

    // lisaRaamatTabelisse
    lisaYlesanneTabelisse (r){
        const li = document.createElement('li');
        // täidame rea tabeli andmetega 
        li.innerHTML = `
            ${r.task}<a href="#" class="kustuta">X</a>
            
        `;

        // lisame rea tabeli sisse <td><a href="#"><i class="fas fa-times kustuta"></i></a></td>
        const list = document.getElementsByClassName('collection');
        list.appendChild(li);
    }

    naitaYlesannet(){
        // vaatame, millised raamatud on olemas 
        const ls = new LS()

        const ylesanded = ls.loeYlesannet();
        ylesanded.forEach(function(ylesanne){
            // loeme andmed local storagest ühekaupa ja teisendame Raamat objektiks 
            const r = new Ylesanne(ylesanne['task']);
            // loome kl objekti väljastamiseks 
            const kl = new KL();
            // väljastame tabeli rida
            kl.lisaYlesanneTabelisse(r);
        });
    }
}