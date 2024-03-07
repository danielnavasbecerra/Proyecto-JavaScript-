function resetMain(link) {
    const periods = document.getElementById(link)

    periods.addEventListener("click", () => {
        const mainContainer = document.getElementById("main-container");
        mainContainer.innerHTML = "";
    });
}

function pageHome(){
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

function resetHome() {
    const home = document.getElementById("link-home")

    home.addEventListener("click", () => {
        pageHome();
    });
}





const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
}

function toggleLocalStorage() {
    if (isLight()) {
        localStorage.removeItem("light");
    } else {
        localStorage.setItem("light", "set");
    }
}

function isLight() {
    return localStorage.getItem("light");
}

if (isLight()) {
    toggleRootClass();
}


resetMain("link-programs")
resetHome()

window.addEventListener('load', pageHome)
