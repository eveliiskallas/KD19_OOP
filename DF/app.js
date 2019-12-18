document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);
document.getElementById('btn3').addEventListener('click', getApiData);

//remote API - remote json
function getApiData(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let out = '';
        data.forEach(function(users){
        out = out + `<li>${users.login}</li>`;
        out = out + `<img src="${users.avatar_url}" width="100px">`
        out = out + `<li><a href="${users.html_url}">${users.login} Github</a></li>`
        console.log(out);
        });
        document.getElementById('out').innerHTML = out;
    })
    .catch(function(error){
        console.log(error);
    })
}


// local  Json file 
function getJsonData(){
    fetch('text.json').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let out = '';
        data.forEach(function(timetable){
            out = out + `<li>${timetable.õpetaja} - ${timetable.aine}</li>`;
            console.log(out);
        });
        document.getElementById('out').innerHTML = out;
    })
    .catch(function(error){
        console.log(error);
    })
}

// local text file 
function getTextData(){
    fetch('text.txt').then(function(res){
        return res.text(); // andmete küsimine 
    }) 
    .then(function(data){
        console.log(data);
        document.getElementById('out').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}