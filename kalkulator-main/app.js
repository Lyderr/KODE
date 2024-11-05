//  document.getElementById("display").innerText = "7";

function addToDisplay(input) {
    document.getElementById("display").innerText += input ; 
}

function clearDisplay() {
    document.getElementById("display").innerText = ""
}

function calculate() {
    document.getElementById("display").innerText =
    eval(document.getElementById("display").innerText)
}