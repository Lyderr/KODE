function printName() {
    
    // hente navn fra bruker
    let name = document.getElementById("navn").value
    document.getElementById("utskrift").innerHTML = name + " du er en illeluktende, rosa svinesteik"
    //endre bilde til ny pikk
    document.getElementById("pikk").src = 'suki.jpg'
}