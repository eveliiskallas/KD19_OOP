// RAAMATU KONSTRUKTOR 

function Raamat(p, a, i){
    this.pealkiri = p;
    this.autor = a;
    this.isbn = i;
}

// Kasutajaliides - KL 

function KL(){

}

// KL funktsionaal
// sisendväljade puhastamine 
KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
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

    console.log(raamat);

    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

    e.preventDefault();
}