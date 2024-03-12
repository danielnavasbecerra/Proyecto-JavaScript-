
// Funcion que Lista los Profesores de la DB
let profesores = [];
async function showTeachers() {

    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Teachers</h2></div>"

    profesores = await load("profesores");//[{},{}]
    //profesores = {}{} 
    mainContainer.innerHTML += createCard('Teachers'),objectList(profesores);

}

async function newTeacherForm(){
    const teachersHTML = document.getElementById("main-container");
    teachersHTML.innerHTML = "";// assure that is empty
    teachersHTML.innerHTML += "<div class='h2 text-center'>New Teacher</div>"
    const teachers = await load("profesores");
    teachersHTML.innerHTML += await generarFormTeacher();//await createPersonForm(teachers[0],"profesores");

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
async function generarFormTeacher(){
     let formHTML=`
     <form class="align-items-center">
             <label for = "profesores-tipo_documento-input" >Tipo Documento: </label>
 
             <select id="profesores-tipo_documento-input" class="form-select" aria-label="Default select example" required>
                 <option value="">Selecciona un tipo de documento</option>
                 <option value="CC">Cédula Cidadana</option>
                 <option value="PA">Pasaporte</option>
                 <option value="TI">Carnet de identidad</option>
             </select>
 
             <label for = "profesores-numero_documetno-input">Número Documento: </label>
             <input type="number" class="form-control" id = "profesores-numero_documetno-input" rows="1" required> 
 
             <label for = "profesores-nombre-input">Nombres: </label>
             <input type="text" class="form-control" id = "profesores-nombre-input" rows="1" required> 
 
             <label for = "apellidosProfesor">Apellidos: </label>
             <input type="text" class="form-control" id = "profesores-apellido-input" rows="1" required> 
 
             <label for="profesores-departamento_id-input">Departamento:</label>
                 <select id="profesores-departamento_id-input" class="form-select" aria-label="Default select example" required>
                 ${objectSelect(departamentos)}
             </select>
 
             <br>
             
             <button type = "button" class="btn btn-primary mt-2" onclick = "addprofesores()">Agregar Docente</button>
     </form>
     `
     


    return formHTML

}
