const switch1 = document.querySelector(".switch");
const dot1 = document.querySelector(".dot");

switch1.addEventListener("click", function () {
    dot1.classList.toggle("dot-right");
    switch1.classList.toggle("switch-right")
})


let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".lg_view");
menuicon.addEventListener("click", () => { 
    lg_view.classList.toggle("show");
});