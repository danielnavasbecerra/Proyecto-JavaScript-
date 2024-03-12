
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
    studentsHTML.innerHTML += await generarFormStudent();
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

async function generarFormStudent(){
    let formHTML=`
    <form class="align-items-center">
            <label for = "alumnos-nombre-input" >Nombre: </label>
            <input type="text" class="form-control" id = "alumnos-nombre-input" rows="1" required>

            <label for = "alumnos-apellido-input">Apellido: </label>
            <input type="text" class="form-control" id = "alumnos-apellido-input" rows="1" required> 

            <label for = "alumnos-apellido-input">Tipo Documento: </label>
            <select id="alumnos-tipo_documento-input" class="form-select" aria-label="Default select example" required>
                <option value="">Selecciona un tipo de documento</option>
                <option value="CC">Cédula Cidadana</option>
                <option value="PA">Pasaporte</option>
                <option value="TI">Carnet de identidad</option>
            </select>

            <label for = "alumnos-numero_documento-input">Número Documento: </label>
            <input type="number" class="form-control" id = "alumnos-numero_documento-input" rows="1" required> 
            
            <label for = "alumnos-ciudad_residencia-input" >Ciudad de Residencia: </label>
            <input type="text" class="form-control" id = "alumnos-ciudad_residencia-input" rows="1" required>

            <label for = "alumnos-direccion-input" >Dirección: </label>
            <input type="text" class="form-control" id = "alumnos-direccion-input" rows="1" required>

            <label for = "alumnos-telefono-input" >Telefono: </label>
            <input type="number" class="form-control" id = "alumnos-telefono-input" rows="1" required>

            <label for = "alumnos-fecha_nacimiento-input" >Fecha Nacimiento: </label>
            <input type="date" value="AAAA-MM-DD" class="form-control" id = "alumnos-fecha_nacimiento-input" rows="1" required>

            <label for="alumnos-sexo-input">Género: </label>
            <select id="alumnos-sexo-input" class="form-select" aria-label="Default select example" required>
                <option value="">Selecciona Tu Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>

            <label for="alumnos-programa_id-input">Programa:</label>
            <select id="alumnos-programa_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(programas)}
            </select>

            <br>
            
            <button type = "button" class="btn btn-primary mt-2" onclick = "addalumnos()">Agregar Docente</button>
    </form>
    `
   return formHTML
}