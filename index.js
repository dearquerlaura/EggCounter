

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment () {
    count += 1 // count = count + 1;
    countEl.innerText = count;
};

function save () {
    console.log (count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    // increment(count=-1)
    count = 0
    countEl.innerText = 0
};



//Falta quitar el último dash de Previous entries