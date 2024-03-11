
// Funcion que Lista los Asignaturas de la DB
async function showSubjects() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Subjects</h2></div>"

    const asignaturas = await load("asignaturas");//[{},{}]

    //asignaturas = {}{} 
    mainContainer.innerHTML += createCard('Subjects'),objectList(asignaturas);

}