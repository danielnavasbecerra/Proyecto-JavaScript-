
// Funcion para Vaciar el Contenedor(Main)
function resetMain(link) {
    //ID del Boton de la Seccion
    const sectionMain = document.getElementById(link)

    sectionMain.addEventListener("click", () => {
        const mainContainer = document.getElementById("main-container");
        mainContainer.innerHTML = "";
    });
}

// Funcion que Contiene la Pagina(Home)
function showHome() {
    const mainHome = document.getElementById("main-container");
    mainHome.innerHTML = `<div id="page-home" class="container-fluid">
            <div class="mb-3">
                <h4>The Sages</h4>
            </div>
            <div>
                <div class="col-12 col-md-6 d-flex" style="
                width: 100%">
                    <div class="card flex-fill border-0 illustration">
                        <div class="card-body p-0 d-flex flex-fill">
                            <div  id="img_home" class="row g-0 w-100">
                                <div class="col-6">
                                    <div id="text" class="p-3 m-1">
                                        <h4>Welcome Back, the best university website</h4>
                                    </div>
                                    <div id="text" class="col-6 align-self-end text-end">
                                        <img src="IMG/admin.png" class="img-fluid illustration-img" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 d-flex">
                    <div class="card flex-fill border-0 illustration">
                        <div class="card-body p-0 d-flex flex-fill">
                            <div class="row g-0 w-100">
                                <div class="col-6">
                                    <div class="p-3 m-1">
                                        <h4>Welcome Back, the best university website</h4>
                                        <p class="mb-0">Admin Dashboard, on all University Data</p>
                                    </div>
                                </div>
                                <div class="col-6 align-self-end text-end">
                                    <img src="IMG/admin.png" class="img-fluid illustration-img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex">
                    <div class="card flex-fill border-0">
                        <div class="card-body py-4">
                            <div class="d-flex align-items-start">
                                <div class="flex-grow-1">
                                    <h4 class="mb-2">
                                        + 100.000
                                    </h4>
                                    <p class="mb-2">
                                        More Than One Hundred Thousand Students Enrolled
                                    </p>
                                    <div class="mb-0">
                                        <span class="badge text-success me-2">
                                            +10.0%
                                        </span>
                                        <span class="text-muted">
                                            Since Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}

// Funcion que al presionar la Opcion Home 
// Muestra la Pagina(Home)
function resetHome() {
    const home = document.getElementById("link-home")
    home.addEventListener("click", () => {
        showHome();
    });
}
resetHome()
window.addEventListener('load', showHome)



// json functions
async function load(url) {
    try {
        let returnList = [];
        const response = await fetch(`http://localhost:3000/${url}`);
        if (!response.ok) {
            throw new Error(`Error to load ${url} state:`, response.status);
        }
        returnList = await response.json();
        return returnList;
    } catch (error) {
        console.error(`error to load the ${url}`, error.message);
    }
}

async function save(newUser, url) {
    try {
        const response = await fetch(`http://localhost:3000/${url}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newUser)
        });
        if (!response.ok) {
            throw new Error(`Error to load ${url}. state:`, response.status);
        }
        const createdUser = await response.json();
        console.log("created ${url}:", createdUser);
    } catch (error) {
        console.error(`error to load the ${url}`, error.message);
    }
}


//html functions

async function createPersonForm(dataDic, name) {
    // Diseño de Formulario
    let formHTMl = `
    <form class="align-items-center">
    `;

    for (let key in dataDic) {
        if (key === "class_schedule") {
            formHTMl += `
            <label for="${name}-day-input">Select day</label> 
            <select id="${name}-day-input" class="form-select" aria-label="Default select example">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
            </select> `
            // begin and end hour
            formHTMl += `
            <label for="${name}-hour-input">Select hour of start and end</label> 
            <select id="${name}-hour-input" class="form-select" aria-label="Default select example">
                <option value="06:00 07:00">06:00 07:00</option>
                <option value="07:00 08:00">07:00 08:00</option>
                <option value="08:00 09:00">08:00 09:00</option>
                <option value="09:00 10:00">09:00 10:00</option>
                <option value="10:00 11:00">10:00 11:00</option>
                <option value="11:00 12:00">11:00 12:00</option>
                <option value="12:00 13:00">12:00 13:00</option>
                <option value="13:00 14:00">13:00 14:00</option>
                <option value="14:00 15:00">14:00 15:00</option>
                <option value="15:00 16:00">15:00 16:00</option>
                <option value="16:00 17:00">16:00 17:00</option>
                <option value="17:00 18:00">17:00 18:00</option>
                <option value="18:00 19:00">18:00 19:00</option>
                <option value="19:00 20:00">19:00 20:00</option>
                <option value="20:00 21:00">20:00 21:00</option>
                <option value="21:00 22:00">21:00 22:00</option> 
            </select> `
            //classroom id
            formHTMl += `
            <label for="${name}-classroom_id-input">Select classroom id</label> 
            <select id="${name}-classroom_id-input" class="form-select" aria-label="Default select example">
            `
            classrooms = await load("classrooms");
            for (classroom of classrooms) {
                console.log(classroom)
                formHTMl += `<option value="${classroom["id"]}">${classroom["id"]}</option> `
            }
            formHTMl += `</select>`
        } else if (key !== "id" && key !== "price") {
            formHTMl += `
            <div class="form-group">
                <label for="${name}-${key}-input">${key.replaceAll("_", " ").toUpperCase()}</label> 
                <input type="text" class="form-control" id="${name}-${key}-input" rows="1" required></input>
            </div>`;
        }
    }
    formHTMl += `
    <button type="button" class="btn btn-primary mt-2" onClick="add${name}()">Add ${name}</button>
    </form>
    `;
    return formHTMl;
}


function createCard(nameList) {//pass a dictionary to a card
    // Diseño de Lista
    let cardHTMl = `
    <div class="card border-0">
        <div class="card-header">
            <h5 class="card-title">
                List Of ${nameList}
            </h5>
            <h6 class="card-subtitle text-muted">
                Below you can see the list of the current ${nameList}
            </h6>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr id="data_key">
                    </tr>
                </thead>
                <tbody id="data_value">
                </tbody>
        </div>
    </div>`;

    return cardHTMl;
}

// Lista de objetos(JSON) para listar
function objectList(dataDic) {
    for (let key in dataDic) {
        selectKey(dataDic[key])
        selectValue(dataDic)
    }
}
// Funcion para Seleccionar Las KEYS
function selectKey(data) {
    let body = ''
    for (let key in data) {
        body += `<th scope="row">${key.toUpperCase()}</th>`
    }
    document.getElementById('data_key').innerHTML = body
}
// Funcion para Seleccionar Los VALUES
function selectValue(data) {
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr>`
        for (let key in data[i]) {
            if (key === "id") {
                body += `<th scope="row">${data[i]["id"]}</th>`;
            }
            else {
                body += `<td>${data[i][key]}</td>`;
            }
            // console.log(data[i][key])
        }
        body += `</tr>`
    }
    document.getElementById('data_value').innerHTML = body
}