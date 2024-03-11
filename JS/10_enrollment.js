
// Funcion que Lista los Matriculas de la DB
async function showEnrollment() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Enrollment</h2></div>"

    const matriculas = await load("matriculas");//[{},{}]

    //matriculas = {}{} 
    mainContainer.innerHTML += createCard('Enrollment'),objectList(matriculas);

}