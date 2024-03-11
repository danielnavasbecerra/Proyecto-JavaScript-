
// Funcion que Lista los Profesores de la DB
async function showTeachers() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Teachers</h2></div>"

    const profesores = await load("profesores");//[{},{}]

    //profesores = {}{} 
    mainContainer.innerHTML += createCard('Teachers'),objectList(profesores);

}

async function newTeacherForm(){
    const teachersHTML = document.getElementById("main-container");
    teachersHTML.innerHTML = "";// assure that is empty
    teachersHTML.innerHTML += "<div class='h2 text-center'>New Teacher</div>"
    const teachers = await load("profesores");
    teachersHTML.innerHTML += await createPersonForm(teachers[0],"profesores");
}

async function addprofesores(){
    const teacherList = await load("profesores");

    const documentTypeInput = document.getElementById("profesores-tipo_documento-input");
    const documentNumberInput = document.getElementById("profesores-numero_documetno-input");
    const documentFirstNameInput = document.getElementById("profesores-nombre-input");
    const documentLastNameInput = document.getElementById("profesores-apellido-input");
    const documentdeparmentIdInput = document.getElementById("profesores-departamento_id-input");

    const documentType = documentTypeInput.value;
    const documentNumber = documentNumberInput.value;
    const documentFirstName = documentFirstNameInput.value;
    const documentLastName = documentLastNameInput.value;
    const documentdeparmentId = documentdeparmentIdInput.value;

    const newTeacher = {
        "id": teacherList.length + 1,
        "tipo_documento": documentType,
        "numero_documetno": documentNumber,
        "nombre": documentFirstName,
        "apellido": documentLastName,
        "departamento_id": documentdeparmentId
    }

    await save(newTeacher,"profesores");
    await load("profesores");

    // documentTypeInput.value ="";
    // documentNumberInput.value="";
    // documentFirstNameInput.value="";
    // documentLastNameInput.value="";
    // documentdeparmentIdInput.value="";
    alert("Teacher sucessfully created");
    return newTeacher

}