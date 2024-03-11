
// Funcion que Lista los Alumnos de la DB
async function showStudents() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Students</h2></div>"

    const alumnos = await load("alumnos");//[{},{}]

    //alumnos = {}{} 
    mainContainer.innerHTML += createCard('Students'),objectList(alumnos);

}

async function newStudentForm(){
    const studentsHTML = document.getElementById("main-container");
    studentsHTML.innerHTML = "";// assure that is empty
    studentsHTML.innerHTML += "<div class='h2 text-center'>New student</div>"
    const students = await load("alumnos");
    studentsHTML.innerHTML += await createPersonForm(students[0],"alumnos");
}

async function addalumnos(){
    const studentList = await load("alumnos");

    const documentTypeInput = document.getElementById("alumnos-tipo_documento-input");
    const documentNumberInput = document.getElementById("alumnos-numero_documento-input");
    const documentFirstNameInput = document.getElementById("alumnos-nombre-input");
    const documentLastNameInput = document.getElementById("alumnos-apellido-input");
    const documentResidentCityInput = document.getElementById("alumnos-ciudad_residencia-input");
    const documentDirectionInput = document.getElementById("alumnos-direccion-input");
    const documentPhoneInput = document.getElementById("alumnos-telefono-input");
    const documentBirthdateInput = document.getElementById("alumnos-fecha_nacimiento-input");
    const documentGenderInput = document.getElementById("alumnos-sexo-input");
    const documentProgramIdInput = document.getElementById("alumnos-programa_id-input");

    const documentType = documentTypeInput.value;
    const documentNumber = documentNumberInput.value;
    const documentFirstName = documentFirstNameInput.value;
    const documentLastName = documentLastNameInput.value;
    const documentResidentCity = documentResidentCityInput.value;
    const documentDirection = documentDirectionInput.value;
    const documentPhone = documentPhoneInput.value;
    const documentBirthdate = documentBirthdateInput.value;
    const documentGender = documentGenderInput.value;
    const documentProgramId = documentProgramIdInput.value;

    const newStudent = {
        "id": studentList.length + 1,
        "nombre": documentFirstName,
        "apellido": documentLastName,
        "tipo_documento": documentType,
        "numero_documento": documentNumber,
        "ciudad_residencia": documentResidentCity,
        "direccion": documentDirection,
        "telefono": documentPhone,
        "fecha_nacimiento": documentBirthdate,
        "sexo": documentGender,
        "programa_id": documentProgramId
    }

    await save(newStudent,"alumnos");

    documentTypeInput.value ="";
    documentNumberInput.value="";
    documentFirstNameInput.value="";
    documentLastNameInput.value="";
    documentResidentCityInput.value="";
    documentDirectionInput.value="";
    documentPhoneInput.value="";
    documentBirthdateInput.value="";
    documentGenderInput.value="";
    documentProgramIdInput.value="";

    alert("Student sucessfully created");
    return newStudent;

}