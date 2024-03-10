
// Funcion que Lista las Tarifas de la DB
async function showRates() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Rates</h2></div>"

    const tarifas = await load("tarifas");//[{},{}]

    //tarifas = {}{} 
    mainContainer.innerHTML += createCard('Rates'),objectList(tarifas);

}