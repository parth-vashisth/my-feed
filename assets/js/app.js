const switch1 = document.querySelector(".switch");
const dot1 = document.querySelector(".dot");

switch1.addEventListener("click", function () {
    dot1.classList.toggle("dot-right");
    switch1.classList.toggle("switch-right")
})
