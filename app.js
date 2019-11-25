// RAAMATU KONSTRUKTOR 

function Raamat(p, a, i){
    this.pealkiri = p;
    this.autor = a;
    this.isbn = i;
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

    e.preventDefault();
}