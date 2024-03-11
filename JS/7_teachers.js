
// Funcion que Lista los Profesores de la DB
async function showTeachers() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Teachers</h2></div>"

    const profesores = await load("profesores");//[{},{}]

    //profesores = {}{} 
    mainContainer.innerHTML += createCard('Teachers'),objectList(profesores);

}