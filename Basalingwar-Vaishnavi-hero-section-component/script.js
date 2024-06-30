let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
let outputEl = document.getElementById("output");

let options = {
    method: "GET"
};

function some() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    jokeTextEl.textContent = "";
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let b = json.value;
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            outputEl.textContent = b;
        });
}

jokeBtnEl.addEventListener("click", some);
