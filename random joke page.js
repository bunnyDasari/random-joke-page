let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");

jokeBtn.onclick = function() {
    let option = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            console.log(jsondata)
            let a = JSON.stringify(jsondata);
            jokeText.textContent = a;
        })



}