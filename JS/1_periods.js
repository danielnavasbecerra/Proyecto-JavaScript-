
// Funcion que Lista los Periodos de la DB
async function showPeriods() {
    const mainContainer = document.getElementById("main-container")
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += "<div class='h2 text-center'>Academic Periods</div>"

    const periodos = await load("periodos");//[{},{}]
    for (periodo of periodos) {//programa = {}{} 
        mainContainer.innerHTML += createCard(periodo, 'Periods');
    }
}

// <!-- Table Element -->
// <div class="card border-0">
//     <div class="card-header">
//         <h5 class="card-title">
//             EJEMPLO PARA LISTAR
//         </h5>
//         <h6 class="card-subtitle text-muted">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus,
//             necessitatibus reprehenderit itaque!
//         </h6>
//     </div>
//     <div class="card-body">
//         <table class="table">
//             <thead>
//                 <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">First</th>
//                     <th scope="col">Last</th>
//                     <th scope="col">Handle</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <th scope="row">1</th>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                 </tr>
//                 <tr>
//                     <th scope="row">2</th>
//                     <td>Jacob</td>
//                     <td>Thornton</td>
//                     <td>@fat</td>
//                 </tr>
//                 <tr>
//                     <th scope="row">3</th>
//                     <td colspan="2">Larry the Bird</td>
//                     <td>@twitter</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
// </div>
