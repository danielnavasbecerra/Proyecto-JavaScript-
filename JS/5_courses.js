
// Funcion que Lista los Cursos de la DB
let cursos = [];
async function showCourses() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Courses</h2></div>"

    cursos = await load("cursos");//[{},{}]

    //cursos = {}{} 
    mainContainer.innerHTML += createCard('Courses'),objectList(cursos);

}