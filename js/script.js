const main = document.querySelector(".container");

for (i = 1; i <= 100; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
        main.innerHTML += `<div class = "box red">${i}</div>`;
    } else if (i % 3 == 0){        
        main.innerHTML += `<div class = "box green">${i}</div>`;
    } else if (i % 5 == 0){
        main.innerHTML += `<div class = "box yellow">${i}</div>`;
    } else {
        main.innerHTML += `<div class = "box blue">${i}</div>`;
    }

}