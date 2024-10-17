let count = 0
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")


let name = "Lyder Strømme "
let greeting = "er en kuk!"

welcomeEl.innerHTML = name + greeting


// "+=" gjør det samme som x = x
welcomeEl.innerHTML += "👋"

console.log(countEl)

function submitInc(){
    count += + 1
    countEl.innerHTML = count
}

function save(){
    let print = count + " - "
    saveEl.innerHTML += print
    countEl.innerHTML = 0
    count = 0
}





