
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