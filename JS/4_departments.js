
// Funcion que Lista los Departamentos de la DB
let departamentos = [];
async function showDepartments() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Departments</h2></div>"

    departamentos = await load("departamentos");//[{},{}]

    //departamentos = {}{} 
    mainContainer.innerHTML += createCard('Departments'), objectList(departamentos);

}