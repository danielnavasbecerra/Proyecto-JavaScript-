
// Funcion que Lista los Departamentos de la DB
async function showDepartments() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Departments</h2></div>"

    const departamentos = await load("departamentos");//[{},{}]

    //departamentos = {}{} 
    mainContainer.innerHTML += createCard('Departments'),objectList(departamentos);

}