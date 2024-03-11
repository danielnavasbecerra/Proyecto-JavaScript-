
// Funcion que Lista los Alumnos de la DB
async function showStudents() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Students</h2></div>"

    const alumnos = await load("alumnos");//[{},{}]

    //alumnos = {}{} 
    mainContainer.innerHTML += createCard('Students'),objectList(alumnos);

}