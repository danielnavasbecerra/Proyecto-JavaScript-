
// Funcion que Lista los Salones de la DB
let salones =[];
async function showClassrooms() {

    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Classrooms</h2></div>"

    salones = await load("salones");//[{},{}]

    //salones = {}{} 
    mainContainer.innerHTML += createCard('Classrooms'),objectList(salones);

}