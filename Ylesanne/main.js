const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');
const flter = document.querySelector('#filter');

document.addEventListener('DOMContentLoaded', ylesanneteTabel);

// raamatutetabeli funktsoon
function ylesanneteTabel(e){
    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();
    // kutsume raamatute näitamise funktsiooni
    kl.naitaYlesannet();
    e.preventDefault();
}

document.getElementById('task-form').addEventListener('submit', lisaYlesanne);

// Raamatu lisamise funktsioon   
function lisaYlesanne(e){        
    const taskInput = document.getElementById('task').value;

    // loome raamatud andmete põhjal 
    const ylesanne = new Ylesanne(taskInput);

    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();
    const ls = new LS();

    // kui mingid andmed on puudu, siis anname märku 
    if(taskInput == '' ){
        alert('Lisa ülesanne!', 'invalid');
    } else {
        // muidu lisame sisestatud raamatu tabelisse 
        // lisame sisestatud raamatu tabelisse 
        kl.lisaYlesanneTabelisse(ylesanne);
        kl.puhastaSisend();

        // loome LS objekti funktsiooni kutsumiseks 
        // lisame raamatu andmed  local storage'sse
        ls.salvestaYlesanne(ylesanne);
        // kl.teade('Raamat on lisatud tabelisse', 'valid');    
    }
    // puhastame väljad sisestatud andmetest
    e.preventDefault();
}

document.querySelector('.collection').addEventListener('click', eemaldaYlesanne);
function eemaldaYlesanne(e){
    const kl = new KL();
    const ls = new LS();
    kl.kustutaYlesanneTabelist(e.target);
    console.log(e.target.parentElement.parentElement.innerText);
    ls.kustutaYlesanneLS(e.target.parentElement.parentElement.innerText);
    e.preventDefault();
}

document.getElementById('clear-tasks').addEventListener('click', kustutaYl);
function kustutaYl(e){

    const kl = new KL();
    kl.kustutaKoikYlesanded();
    e.preventDefault();

}
