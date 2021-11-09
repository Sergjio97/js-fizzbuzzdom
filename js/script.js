const main = document.querySelector(".container");

let f = "fizz";

let b = "buzz";

let x = f + b;

for (i = 1; i <= 100; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
        main.innerHTML += `<div class = "box red">${x}</div>`;
    } else if (i % 3 == 0){        
        main.innerHTML += `<div class = "box green">${f}</div>`;
    } else if (i % 5 == 0){
        main.innerHTML += `<div class = "box yellow">${b}</div>`;
    } else {
        main.innerHTML += `<div class = "box blue">${i}</div>`;
    }

}