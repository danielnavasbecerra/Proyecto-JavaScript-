
// Solo Listar:
document.getElementById('link-periods').addEventListener('click', showPeriods);
document.getElementById('link-programs').addEventListener('click', showPrograms);
document.getElementById('link-rates').addEventListener('click', showRates);
document.getElementById('link-departments').addEventListener('click', showDepartments);
document.getElementById('link-courses').addEventListener('click', showCourses);
document.getElementById('link-classrooms').addEventListener('click', showClassrooms);

// Profesores:
//Listar
document.getElementById('list-teachers').addEventListener('click', showTeachers);
//Formulario
document.getElementById('form-teachers').addEventListener('click', newTeacherForm)

// Alumnos:
//Listar
document.getElementById('list-students').addEventListener('click', showStudents);
//Formulario
document.getElementById('form-students').addEventListener('click', newStudentForm)

// Subjects:
document.getElementById('list-subjects').addEventListener('click', showSubjects);
// document.getElementById("nav-subjects").addEventListener("click",subjectOptions);
document.getElementById('form-subjects').addEventListener('click', newSubjectForm);

// Enrollment:
document.getElementById('list-enrollment').addEventListener("click", showEnrollment);
// document.getElementById("nav-enrollment").addEventListener("click",tuitionOptions);
// document.getElementById("new-enrollment").addEventListener("click",newTuitionForm);

showPrograms()
showDepartments()
showCourses()
showTeachers()
showClassrooms()