
// Funcion que Lista los Matriculas de la DB
async function showEnrollment() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='mb-3'><h2 class='text-center card-title'>Academic Enrollment</h2></div>"

    const matriculas = await load("matriculas");//[{},{}]

    //matriculas = {}{} 
    mainContainer.innerHTML += createCard('Enrollment'), objectList(matriculas);

}


async function newEnrollmentForm() {

    const enrollmentHTML = document.getElementById("main-container");
    enrollmentHTML.innerHTML = "";// assure that is empty
    enrollmentHTML.innerHTML += "<div class='h2 text-center'>New Enrollment</div>"
    const enrollment = await load("matriculas");
    enrollmentHTML.innerHTML += await generarFormEnrollment();

}

async function addTuition() {
    const tuitionList = await load("matriculas");

    const studentIdInput = document.getElementById("Tuition-student_id-input");//
    const subjectIdInput = document.getElementById("Tuition-subject_id-input");
    const periodIdInput = document.getElementById("Tuition-period_id-input");

    const studentId = studentIdInput.value;
    const subjectId = subjectIdInput.value;
    const periodId = periodIdInput.value;

    const newEnrollment = {
        "id": tuitionList.length + 1,
        "estudiante_id": studentId,
        "asignatura_id": subjectId,
        "periodo_id": periodId,
        "precio": 4000
    }

    await save(newEnrollment, "matriculas");

    studentIdInput.value = "";
    subjectIdInput.value = "";
    periodIdInput.value = "";

    alert("Enrollment sucessfully created");
    return newEnrollment;

}

async function generarFormEnrollment() {
    let formHTML = `
    <form class="align-items-center">
            <label for = "Tuition-student_id-input" >Estudiante: </label>
            <select id="Tuition-student_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(alumnos)}
            </select>

            <label for = "Tuition-subject_id-input">Asignaturas: </label>
            <select id="Tuition-subject_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(asignaturas)}
            </select>
            
            <label for = "Tuition-period_id-input" >Periodos: </label>
            <select id="Tuition-period_id-input" class="form-select" aria-label="Default select example" required>
                ${objectSelect(periodos)}
            </select>

            <br>
            
            <button type = "button" class="btn btn-primary mt-2" onclick="addTuition()">Agregar Asignatura</button>
    </form>
    `
    return formHTML
}
