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
function showHome(){
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
            <!-- Table Element -->
            <div class="card border-0">
                <div class="card-header">
                    <h5 class="card-title">
                        EJEMPLO PARA LISTAR
                    </h5>
                    <h6 class="card-subtitle text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus,
                        necessitatibus reprehenderit itaque!
                    </h6>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
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

window.addEventListener('load', pageHome)


// json functions
async function load(url){
    try{
        let returnList = [];
        const response = await fetch(`http://localhost:3000/${url}`);
        if(!response.ok){
            throw new Error(`Error to load ${url} state:`,response.status);
        }
        returnList = await response.json();
        return returnList;
    }catch(error){
        console.error(`error to load the ${url}`,error.message);
    }
}



//html functions

function createCard(dataDic){//pass a dictionary to a card
    let cardHTMl = `
    <div class="col">
        <div class="card">
            <div class="card-body">
                
    `;

    for(let key in dataDic){
        if(key === "id"){
            cardHTMl += `<h5 class="card-title">ID: ${dataDic["id"]}</h5>
            <ul class="list-group">`;
        }
        else{
            cardHTMl += `<li class="list-group-item">${key.replace("_"," ")}: ${dataDic[key]}</li>`;
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

function initialState(){
    const container = document.getElementById("main-container");
    const divs = container.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++){
        divs[i].innerHTML = "";
    }
}