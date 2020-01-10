class KL {
    puhastaSisend(){
        document.getElementById('task').value = '';
    }

    // lisaRaamatTabelisse
    lisaYlesanneTabelisse (r){
       const taskInput = document.querySelector('#task');
       const taskList = document.querySelector('#collection');

       const li = document.createElement('li');
       li.className = 'collection-item';
       li.appendChild(document.createTextNode(taskInput.value));
       const link = document.createElement('a');
       link.className = 'kustuta secondary-content';
       link.innerHTML = `<i class="fa fa-remove"></i>`;
       li.appendChild(link);
       taskList.appendChild(li);

    }

        // kustutaRaamatTabelist 
        kustutaYlesanneTabelist(kustutaElement){
            if(kustutaElement.className === 'kustuta'){
                const listiRida = kustutaElement.parentElement;
                listiRida.remove();
                return true;
            }
        }

    naitaYlesannet(){
        // vaatame, millised raamatud on olemas 

        let ylesanded;
        const taskInput = document.querySelector('#task');
        const taskList = document.querySelector('#collection');
        const ls = new LS();

        ls.loeYlesannet();

        ylesanded.forEach(function(r){
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(r));
            const link = document.createElement('a');
            link.className = 'kustuta secondary-content';
            link.innerHTML = `<i class="fa fa-remove"></i>`;
            li.appendChild(link);
            taskList.appendChild(li);
        });
        if(localStorage.getItem('ylesanded') === null){
            ylesanded = '';
        } else {
            ylesanded = localStorage.getItem('ylesanded');
        }
        taskList.innerHTML = ylesanded;



        // const ylesanded = ls.loeYlesannet();
        // ylesanded.forEach(function(sisend){
        //     // loeme andmed local storagest ühekaupa ja teisendame Raamat objektiks 
        //     const r = new Ylesanne(sisend['ylesanne']);
        //     // loome kl objekti väljastamiseks 
        //     const kl = new KL();
        //     // väljastame tabeli rida
        //     kl.lisaYlesanneTabelisse(r);
        // });


    }
}