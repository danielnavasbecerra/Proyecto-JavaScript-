
// Funcion que Lista los Programas de la DB
let programas = [];
async function showPrograms() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Programs</h2></div>"

    programas = await load("programas");//[{},{}]

    //programas = {}{} 
    mainContainer.innerHTML += createCard('Programs'), objectList(programas);

}