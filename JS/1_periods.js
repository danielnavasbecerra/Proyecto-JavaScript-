
// Funcion que Lista los Periodos de la DB
let periodos = [];
async function showPeriods() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Periods</h2></div>"

    periodos = await load("periodos");//[{},{}]

    //periodos = {}{} 
    mainContainer.innerHTML += createCard('Periods'),objectList(periodos);

}
