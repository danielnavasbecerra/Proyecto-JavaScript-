let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 80) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#212529 ${scrollValue}%, #dee2e6 ${scrollValue}%)`;
};

// STYLES
// aquivaElId.hidden {
//     animation: hide .5s forwards;
// }
// @keyframes fade-out {
//     to {
//         display: none;
//         opacity: 0;
//     }
// }
// document.addEventListener('click', ()=>{
//     const animation =document.getElementById('progress');
//     animation.classList.add('hidden')
// })

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;