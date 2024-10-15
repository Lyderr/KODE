function navnknapp(){
    //la bruker gi verdi til fornavn/etternavn
    let fornavn, etternavn;
    fornavn = document.getElementById("fornavn").value;
    etternavn = document.getElementById("etternavn").value;

    //skrive ut fullt nav + søt melding
    document.getElementById("fullnavn").innerHTML = `${fornavn} ${etternavn} er kjempekul`
}

function nummerknapp(){
    //la bruker gi verdi til nummer
    let nummer = Number(document.getElementById("nummer").value)

    //sette interne variabler
    let halvpart = nummer / 2;
    let dobbel = nummer * 2;
    let trippel = nummer * 3;
    let kvadrat = nummer * nummer;

    //variabel for fullt svar
    let svar = `Tallet er ${nummer}
    Halvparten er ${halvpart}
    Dobbelt er ${dobbel}
    Trippelt er ${trippel}
    Kvadratet er ${kvadrat}`

    //printe ut svar
    document.getElementById("kalkuler").innerHTML = `${svar}`
}

function beregn(){
    //la bruker sette grader
    let grad1 = Number(document.getElementById("grad1").value)

    //omregning av grad
    let grad2 = (grad1 - 32) * 5/9;
    let grad3 = grad2 + 273.15;

    //variabel for svarutskrift
    let fullgrad = `${grad1} grader Fahrenheit tilsvarer ${grad2} grader Celsius og ${grad3} grader Kelvin`

    //printe ut svar
    document.getElementById("output").innerHTML = `${fullgrad}`
}

function beregn1(){
    let gradA = Number(document.getElementById("gradA").value)

    let gradB = gradA * 9/5 + 32;
    let gradC = gradA + 273.15;

    let fullgrad1 = `${gradA} grader Celsius tilsvarer ${gradB} grader Fahrenheit og ${gradC} grader Kelvin`

    document.getElementById("output1").innerHTML = `${fullgrad1}`
}

function beregn2(){
    let kmh = Number(document.getElementById("kmh").value)

    let mph = kmh * 0.6213711922;

    let fartsvar = `${kmh} km/h tilsvarer ${mph} miles per  hour!`

    document.getElementById("output2").innerHTML = `${fartsvar}`
}

function beregn3(){
    let mph1 = Number(document.getElementById("mph").value)

    let kmh1 = mph1 * 1.609344;

    let fartsvar1 = `${mph1} miles per hour tilsvarer ${kmh1} km/h!`

    document.getElementById("output3").innerHTML = `${fartsvar1}`
}



