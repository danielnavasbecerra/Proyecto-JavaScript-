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



//html functions
function createCard(dataDic, nameList) {//pass a dictionary to a card
    
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
                    <tr>
    `;

    for (let key in dataDic) {
        if (key === "id") {
            cardHTMl += `<th scope="col"># ID</th>
            
            // <h6 class="card-subtitle text-muted"># ID: ${dataDic["id"]}</h6>
            // <ul class="list-group">`;
        }
        else {
            cardHTMl += `<th scope="col">${key.replace("_", " ").toUpperCase()}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${dataDic["id"]}</th>
            // <li class="list-group-item">${key.replace("_", " ").toUpperCase()}: ${dataDic[key]}</li>`;
        }
    }

    cardHTMl += `
                </ul>
            </div>
        </div>
    </div>
    `;
    return cardHTMl;
}