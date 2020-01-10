document.addEventListener('DOMContentLoaded', ylesanneteTabel);

// raamatutetabeli funktsoon
function ylesanneteTabel(e){
    // loome kasutajaliidese objekti temaga opereerimiseks
    kl = new KL();
    // kutsume raamatute näitamise funktsiooni
    kl.naitaYlesannet();
};

document.getElementById('task-form').addEventListener('submit', lisaYlesanne);

// Raamatu lisamise funktsioon   
function lisaYlesanne(e){        
    const sisend = document.getElementById('task').value;

    // loome raamatud andmete põhjal 
    const ylesanne = new Ylesanne(sisend);

    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();

    // kui mingid andmed on puudu, siis anname märku 
    if(sisend == '' ){
        alert('Lisa ülesanne!', 'invalid');
    } else {
        // muidu lisame sisestatud raamatu tabelisse 
        // lisame sisestatud raamatu tabelisse 
        kl.lisaYlesanneTabelisse(ylesanne);
        // loome LS objekti funktsiooni kutsumiseks 
        const ls = new LS();
        // lisame raamatu andmed  local storage'sse
        ls.salvestaYlesanne(ylesanne);
        // kl.teade('Raamat on lisatud tabelisse', 'valid');    
    };
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
}

// Raamatu kustutamise sündmus 
// document.getElementById('collection').addEventListener('click', kustutaYlesanne);
// function kustutaYlesanne(e){
//     // loome kasutajaliidese objekti temaga opereerimiseks
//     const kl = new KL();

//     // kutsutakse tabelist oleva raamatu kustutamise funktsiooni 
//     // loome X link, millele clickime, et kustutada 
//     const X = e.target; 
//     // saame kustutava raamatu isbn kätte 
//     task = X.parentElement.textContent;
//     console.log(task);
//     // kustutame andmed tabeli väljundist 
//     kl.kustutaYlesanneTabelist(X);
//     // kustutame andmed local storagest 
//     const ls = new LS()
//     kustutatud = ls.kustutaYlesanneLS(task);
//     // väljastame vastava teate 
//     if(kustutatud){
//     alert('Oled kindel?', 'valid');
//     }
//     e.preventDefault();
// }

document.getElementById('clear-tasks').addEventListener('click', kustutaKoikYlesanded);
function kustutaKoikYlesanded(k){
    var element = document.getElementsByTagName("li"), index;

    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    localStorage.clear();

    

}