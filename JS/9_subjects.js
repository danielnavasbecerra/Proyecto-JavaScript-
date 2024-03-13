
// Funcion que Lista los Asignaturas de la DB
let asignaturas = [];
async function showSubjects() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Subjects</h2></div>"

    asignaturas = await load("asignaturas");//[{},{}]

    //asignaturas = {}{} 
    mainContainer.innerHTML += createCard('Subjects'),objectList(asignaturas);

}

async function newSubjectForm(){

    const subjectsHTML = document.getElementById("main-container");
    subjectsHTML.innerHTML = "";// assure that is empty
    subjectsHTML.innerHTML += "<div class='h2 text-center'>New subject</div>"
    const subjects = await load("asignaturas");
    subjectsHTML.innerHTML += await generarFormSubject();
    
}

async function addSubject(){
    const subjectList = await load("asignaturas");

    const courseIdInput = document.getElementById("Subject-course_id-input");
    const codeInput = document.getElementById("Subject-code-input");
    const creditInput = document.getElementById("Subject-credits-input");
    const teacherIdInput = document.getElementById("Subject-teacher_id-input");
    const spaceAvailableInput = document.getElementById("Subject-space_available-input");
    const programIdInput = document.getElementById("Subject-program_id-input");
    const dayInput = document.getElementById("Subject-day-input");
    const hourInput = document.getElementById("Subject-hour-input");
    const classroomIdInput = document.getElementById("Subject-classroom_id-input");

    const courseId = courseIdInput.value;
    const code = codeInput.value;
    const credit = creditInput.value;
    const teacherId = teacherIdInput.value;
    const spaceAvailable = spaceAvailableInput.value;
    const programId = programIdInput.value;
    // const day = dayInput.value;
    // const hour = hourInput.value;
    // const classroomId = classroomIdInput.value;
    // const [startHour, enddHour] = hour.split(" ");

    const newSubject = {
        "id": subjectList.length + 1,
        "curso_id": courseId,
        "codigo": code,
        "creditos": credit,
        "profesor_id": teacherId,
        "cupos_disponibles": spaceAvailable,
        "programa_id": programId,
        "horario_clases": [
            {
              "dia": 'day',
              "hora_inicio": 'startHour',
              "hora_fin": 'enddHour',
              "salon_id": 'classroomId'
            }
        ]
    }

    await save(newSubject,"asignaturas");

    courseIdInput.value ="";
    codeInput.value="";
    creditInput.value="";
    teacherIdInput.value="";
    spaceAvailableInput.value="";
    programIdInput.value="";
    dayInput.value="";
    hourInput.value="";
    classroomIdInput.value="";
    documentProgramIdInput.value="";

    alert("Subject sucessfully created");
    return newSubject;

}

async function generarFormSubject(){
    let formHTML=`
    <form class="align-items-center">
            <label for = "Subject-course_id-input" >Curso: </label>
            <select id="Subject-course_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(cursos)}
            </select>

            <label for = "Subject-code-input">Codigo: </label>
            <input type="text" class="form-control" id = "Subject-code-input" rows="1" required> 

            <label for = "Subject-credits-input">Creditos: </label>
            <input type="number" class="form-control" id = "Subject-credits-input" rows="1" required> 

            <label for = "Subject-teacher_id-input">Tipo Documento: </label>
            <select id="Subject-teacher_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(profesores)}
            </select>
            
            <label for = "Subject-space_available-input" >Cupos Disponibles: </label>
            <input type="number" class="form-control" id = "Subject-space_available-input" rows="1" required>

            <label for = "Subject-program_id-input" >Programas: </label>
            <select id="Subject-program_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(programas)}
            </select>

            <label for = "Subject-day-input" >Dia de la Semana: </label>
            <select id"Subject-day-input" class="form-select" aria-label="Default select example" required>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
            </select>
    
            <label for="Subject-hour-input">Horario:</label>
            <select id="Subject-hour-input" class="form-select" aria-label="Default select example" required>
                <option value = "horario1"> 6:00 am - 8:00 am </option>
                <option value = "horario2"> 8:00 am - 10:00 pm </option>
                <option value = "horario3"> 10:00 am - 12:00 pm </option>
                <option value = "horario4"> 12:00 pm - 2:00 pm </option>
                <option value = "horario5"> 2:00 pm - 4:00 pm </option>
                <option value = "horario6"> 4:00 pm - 6:00 pm </option>
            </select>
            </select>

            <label for = "Subject-classroom_id-input" >Salones: </label>
            <select id="Subject-classroom_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(salones)}
            </select>

            <br>
            
            <button type = "button" class="btn btn-primary mt-2" onclick="addSubject()">Agregar Asignatura</button>
    </form>
    `
   return formHTML
}
